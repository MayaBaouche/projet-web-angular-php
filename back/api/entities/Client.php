<?php



use Doctrine\ORM\Mapping as ORM;

/**
 * Client
 *
 * @ORM\Table(name="client")
 * @ORM\Entity
 */
class Client
{
    /**
     * @var int
     *
     * @ORM\Column(name="idClient", type="bigint")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    public $idclient;

    /**
     * @var string
     *
     * @ORM\Column(name="nom", type="string", length=100, nullable=false)
     */
    public $nom;

    /**
     * @var string
     *
     * @ORM\Column(name="prenom", type="string", length=100, nullable=false)
     */
    public $prenom;

    /**
     * @var string|null
     *
     * @ORM\Column(name="adresse", type="string", length=256, nullable=true)
     */
    public $adresse;

    /**
     * @var int
     *
     * @ORM\Column(name="codePostal", type="integer", nullable=false)
     */
    public $codepostal;

    /**
     * @var string
     *
     * @ORM\Column(name="ville", type="string", length=100, nullable=false)
     */
    public $ville;

    /**
     * @var string
     *
     * @ORM\Column(name="pays", type="string", length=100, nullable=false)
     */
    public $pays;

    /**
     * @var string|null
     *
     * @ORM\Column(name="telephone", type="string", length=12, nullable=true)
     */
    public $telephone;

    /**
     * @var string
     *
     * @ORM\Column(name="mail", type="string", length=256, nullable=false)
     */
    public $mail;

    /**
     * @var string
     *
     * @ORM\Column(name="login", type="string", length=256, nullable=false)
     */
    public $login;

    /**
     * @var string
     *
     * @ORM\Column(name="password", type="text", length=65535, nullable=false)
     */
    public $password;


    /**
     * Get idclient.
     *
     * @return int
     */
    public function getIdclient()
    {
        return $this->idclient;
    }

    /**
     * Set nom.
     *
     * @param string $nom
     *
     * @return Client
     */
    public function setNom($nom)
    {
        $this->nom = $nom;

        return $this;
    }

    /**
     * Get nom.
     *
     * @return string
     */
    public function getNom()
    {
        return $this->nom;
    }

    /**
     * Set prenom.
     *
     * @param string $prenom
     *
     * @return Client
     */
    public function setPrenom($prenom)
    {
        $this->prenom = $prenom;

        return $this;
    }

    /**
     * Get prenom.
     *
     * @return string
     */
    public function getPrenom()
    {
        return $this->prenom;
    }

    /**
     * Set adresse.
     *
     * @param string|null $adresse
     *
     * @return Client
     */
    public function setAdresse($adresse = null)
    {
        $this->adresse = $adresse;

        return $this;
    }

    /**
     * Get adresse.
     *
     * @return string|null
     */
    public function getAdresse()
    {
        return $this->adresse;
    }

    /**
     * Set codepostal.
     *
     * @param int $codepostal
     *
     * @return Client
     */
    public function setCodepostal($codepostal)
    {
        $this->codepostal = $codepostal;

        return $this;
    }

    /**
     * Get codepostal.
     *
     * @return int
     */
    public function getCodepostal()
    {
        return $this->codepostal;
    }

    /**
     * Set ville.
     *
     * @param string $ville
     *
     * @return Client
     */
    public function setVille($ville)
    {
        $this->ville = $ville;

        return $this;
    }

    /**
     * Get ville.
     *
     * @return string
     */
    public function getVille()
    {
        return $this->ville;
    }

    /**
     * Set pays.
     *
     * @param string $pays
     *
     * @return Client
     */
    public function setPays($pays)
    {
        $this->pays = $pays;

        return $this;
    }

    /**
     * Get pays.
     *
     * @return string
     */
    public function getPays()
    {
        return $this->pays;
    }

    /**
     * Set telephone.
     *
     * @param string|null $telephone
     *
     * @return Client
     */
    public function setTelephone($telephone = null)
    {
        $this->telephone = $telephone;

        return $this;
    }

    /**
     * Get telephone.
     *
     * @return string|null
     */
    public function getTelephone()
    {
        return $this->telephone;
    }

    /**
     * Set mail.
     *
     * @param string $mail
     *
     * @return Client
     */
    public function setMail($mail)
    {
        $this->mail = $mail;

        return $this;
    }

    /**
     * Get mail.
     *
     * @return string
     */
    public function getMail()
    {
        return $this->mail;
    }

    /**
     * Set login.
     *
     * @param string $login
     *
     * @return Client
     */
    public function setLogin($login)
    {
        $this->login = $login;

        return $this;
    }

    /**
     * Get login.
     *
     * @return string
     */
    public function getLogin()
    {
        return $this->login;
    }

    /**
     * Set password.
     *
     * @param string $password
     *
     * @return Client
     */
    public function setPassword($password)
    {
        $this->password = $password;

        return $this;
    }

    /**
     * Get password.
     *
     * @return string
     */
    public function getPassword()
    {
        return $this->password;
    }
}
