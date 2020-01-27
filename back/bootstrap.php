<?php

use Doctrine\ORM\Tools\Setup;
use Doctrine\ORM\EntityManager;

require_once "vendor/autoload.php";

$isDevMode = true;

$config = Setup::createYAMLMetadataConfiguration(array(__DIR__ . "/api/config/yaml"), $isDevMode);

$conn = array(
    'driver' => 'pdo_mysql',
    'user' => 'root',
    'password' => '',
    'dbname' => 'chocolats',
    'port' => '3308'
);

$entityManager = EntityManager::create($conn, $config);
