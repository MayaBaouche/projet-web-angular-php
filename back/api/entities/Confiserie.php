<?php



use Doctrine\ORM\Mapping as ORM;

/**
 * Confiserie
 *
 * @ORM\Table(name="confiserie", indexes={@ORM\Index(name="idCategorie", columns={"idCategorie"})})
 * @ORM\Entity
 */
class Confiserie
{
    /**
     * @var int
     *
     * @ORM\Column(name="idConfiserie", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    public $idconfiserie;

    /**
     * @var string|null
     *
     * @ORM\Column(name="nom", type="string", length=100, nullable=true)
     */
    public $nom;

    /**
     * @var string|null
     *
     * @ORM\Column(name="description", type="text", length=65535, nullable=true)
     */
    public $description;

    /**
     * @var int
     *
     * @ORM\Column(name="idCategorie", type="integer", nullable=false)
     */
    public $idcategorie;

    /**
     * @var float|null
     *
     * @ORM\Column(name="prixUnitaire", type="float", precision=10, scale=0, nullable=true)
     */
    public $prixunitaire;

    /**
     * @var string
     *
     * @ORM\Column(name="img", type="string", length=2083, nullable=false)
     */
    public $img;


    /**
     * Get idconfiserie.
     *
     * @return int
     */
    public function getIdconfiserie()
    {
        return $this->idconfiserie;
    }

    /**
     * Set nom.
     *
     * @param string|null $nom
     *
     * @return Confiserie
     */
    public function setNom($nom = null)
    {
        $this->nom = $nom;

        return $this;
    }

    /**
     * Get nom.
     *
     * @return string|null
     */
    public function getNom()
    {
        return $this->nom;
    }

    /**
     * Set description.
     *
     * @param string|null $description
     *
     * @return Confiserie
     */
    public function setDescription($description = null)
    {
        $this->description = $description;

        return $this;
    }

    /**
     * Get description.
     *
     * @return string|null
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Set idcategorie.
     *
     * @param int $idcategorie
     *
     * @return Confiserie
     */
    public function setIdcategorie($idcategorie)
    {
        $this->idcategorie = $idcategorie;

        return $this;
    }

    /**
     * Get idcategorie.
     *
     * @return int
     */
    public function getIdcategorie()
    {
        return $this->idcategorie;
    }

    /**
     * Set prixunitaire.
     *
     * @param float|null $prixunitaire
     *
     * @return Confiserie
     */
    public function setPrixunitaire($prixunitaire = null)
    {
        $this->prixunitaire = $prixunitaire;

        return $this;
    }

    /**
     * Get prixunitaire.
     *
     * @return float|null
     */
    public function getPrixunitaire()
    {
        return $this->prixunitaire;
    }

    /**
     * Set img.
     *
     * @param string $img
     *
     * @return Confiserie
     */
    public function setImg($img)
    {
        $this->img = $img;

        return $this;
    }

    /**
     * Get img.
     *
     * @return string
     */
    public function getImg()
    {
        return $this->img;
    }
}
