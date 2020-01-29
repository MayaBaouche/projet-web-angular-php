<?php

use \Firebase\JWT\JWT;
use Doctrine\ORM\Tools\Setup;
use Doctrine\ORM\EntityManager;

include 'bootstrap.php';

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$config = [
    'settings' => [
        'determineRouteBeforeAppMiddleware' => true,
        'displayErrorDetails' => true,
        'addContentLengthHeader' => false
    ],
];

const JWT_SECRET = "makey1234567";

$jwt = new \Slim\Middleware\JwtAuthentication([
"path" => "/api",
"secure" => false,
"secret" => JWT_SECRET,
"passthrough" => ["/login"],
"attribute" => "decoded_token_data",
"algorithm" => ["HS256"],
"error" => function ($response, $arguments) {    
    $data = array('ERREUR' => 'ERREUR', 'ERREUR' => 'AUTO');
    return $response->withHeader("Content-Type", "application/json")->getBody()->write(json_encode($data));
    }
]);

$app = new \Slim\App($config); 

$app->get('/product/{id}', function ($request, $response, $args) use ($entityManager)
{
    $productById =   $entityManager
                            ->getRepository('Confiserie')
                            ->findOneBy(array('idconfiserie' => $args['id']));
    return $response->withJSON($productById);
});

$app->get('/products', function($request, $response, $args) use ($entityManager)
{
    $products =  $entityManager
                ->getRepository('Confiserie')
                ->createQueryBuilder('c')
                ->getQuery()
                ->getArrayResult(); 
    return $response->WithStatus(200)
                    ->withJSON($products);
});

$app->get('/productsFiltered', function ($request, $response, $args) use ($entityManager)
{
    $parameters = $request->getQueryParams();
    $query = 'SELECT cf FROM Confiserie cf LEFT JOIN Categorie ca  WITH ca.idcategorie = cf.idcategorie ';
    if (isset($parameters['categoryName']) && $parameters['categoryName'] != "")
    {
        $query .= 'WHERE ca.nom = \''.$parameters['categoryName'].'\'';
        if (isset($parameters['nameFilter']) && $parameters['nameFilter'] != "")
        {
            $query .= ' AND cf.nom LIKE \'%'.$parameters['nameFilter'].'%\''; 
        }
    }
    else 
    {
        if (isset($parameters['nameFilter']) && $parameters['nameFilter'] != "")
        {
            $query .= ' WHERE cf.nom LIKE \'%'.$parameters['nameFilter'].'%\''; 
        }
    }
    $productsByFilters =  $entityManager
                            ->createQuery($query)
                            ->getArrayResult();

    return $response->WithStatus(200)
                    ->WithJSON($productsByFilters);
});

$app->post('/register', function ($request, $response, $args) use ($entityManager)
{
    $body = $request->getParsedBody();
    $clientRepository = $entityManager->getRepository('Client');
    $response = $response->withStatus(400);
    $error_messages = array();
    if($clientRepository->findOneBy(array('login' => $body['login'])) !== null)
    {
        array_push($error_messages, "login already used.");
    }
    if($clientRepository->findOneBy(array('mail' => $body['mail'])) !== null)
    {
        array_push($error_messages, "mail already used.");
    }
    if (!isset($body['login']))
    {
        array_push($error_messages, "login missing.");
    }
    if (!isset($body['password']))
    {
        array_push($error_messages, "password missing.");
    }
    if (!isset($body['mail']))
    {
        array_push($error_messages, "email missing.");
    } 
    if (empty($error_messages))
    {        
        $newClient = new Client();
        $newClient            
                ->setPrenom($body['first_name'])
                ->setNom($body['last_name'])
                ->setAdresse($body['adress'])    
                ->setCodepostal($body['zip_code'])
                ->setVille($body['city'])
                ->setPays($body['country'])
                ->setTelephone($body['phone'])
                ->setMail($body['mail'])
                ->setPassword(password_hash($body['password'], PASSWORD_DEFAULT))
                ->setLogin($body['login']);
                
        $entityManager->persist($newClient);
        $entityManager->flush();
        return $response->withJSON($newClient)
                        ->withStatus(201);
    }
    return $response->withJson($error_messages);
});

$app->delete('/client/{id}', 'deleteClient');
$app->post('/login', function ($request, $response, $args) use ($entityManager)
{
    $body = $request->getParsedBody();
    $response = $response->withStatus(401);
    if (isset($body['login']) && isset($body['password']))
    {
        $login = $body['login'];
        $password = $body['password'];
        $userRepository = $entityManager->getRepository('Client');
        $userLogged = $userRepository->findOneBy(array('login' => $login));
        if (isset($userLogged) && password_verify($password, $userLogged->getPassword()))
        {
            $issuedAt = time();
            $expirationTime = $issuedAt + 60; // jwt valid for 60 seconds from the issued time
            $payload = array(
            'login' => $login,
            'iat' => $issuedAt,
            'exp' => $expirationTime
            );
            $token_jwt = JWT::encode($payload,JWT_SECRET, "HS256");
            
            $response = $response->withHeader("Authorization", "Bearer {$token_jwt}")
                                ->withHeader("Content-Type", "application/json");
            
            $data = array('token' => $token_jwt);
            return $response
                            ->withStatus(200)
                            ->withJson($data);
        }
    }
    return $response;
});

$app->get('/api/authen', function($request, $response, $args)
{
    $token = $request->getAttribute("decoded_token_data");
    return $response->withHeader("Content-Type", "application/json")
                    ->withJson($token);
});

$app->get('/categories', function ($request, $response, $args) use ($entityManager)
{
    $categories =  $entityManager
                        ->createQuery('SELECT ca FROM Categorie ca')
                        ->getArrayResult();
    return $response->WithJSON($categories);
});

$app->add($jwt);
$app->add(function ($req, $res, $next) 
{
    $response = $next($req, $res);
    return $response
                    ->withHeader('Content-Type', 'application/json; charset=utf-8')
                    ->withHeader("Access-Control-Allow-Origin", "*")
                    ->withHeader("Access-Control-Allow-Headers","*")
                    ->withHeader("Access-Control-Allow-Methods", "HEAD,POST,GET,PUT,DELETE,OPTIONS");

});
$app->run(); 
?>


