<!DOCTYPE html>

<html>
    <head>
        <meta charset="utf8">
        <title>Mon Blog</title>
        <link href="style_blog.css" rel="stylesheet">
    </head>
    
    <body>
        
        <h1>Da Supa Blog !</h1>
        
        <a href="index.php">Retour à la liste des billets</a>
        
        <?php
        // Connexion à la base de donnees
        try
        {
            // Connexion a la BdD
            $bdd = new PDO('mysql:host=localhost;dbname=OCR_test;charset=utf8', 'root', 'root');
        } catch (Exception $ex)
        {
            // En cas d'erreur, affichage d'un message et arret de l'application
            die('Erreur : ' . $ex->getMessage());
        }
        
        // Recuperation du numero de billet et envoi des requetes
        $numero_billet = htmlspecialchars($_GET['billet']);
        
        // Recuperation du billet dans la BdD
        $requete_bil = $bdd->prepare('SELECT ID, titre, contenu, DATE_FORMAT(date_creation, \'%d%m%Y à %Hh%imin%ss\') AS date_creation_fr'
                                . ' FROM billets WHERE ID = ?');
        $requete_bil->execute(array($numero_billet));
        
        $donnees_bil = $requete_bil->fetch();
        
        // Recuperation des commentaires correspondants
        $requete_com = $bdd->prepare('SELECT auteur, commentaire, DATE_FORMAT(date_commentaire, \'%d%m%Y à %Hh%imin%ss\') AS date_commentaire_fr'
                                . ' FROM commentaires_billets WHERE ID_billet = ? ORDER BY date_commentaire DESC');
        $requete_com->execute(array($numero_billet));
        ?>
        
        <div class="news">
            <h3><?= $donnees_bil['titre']; ?>
                <em><?= $donnees_bil['date_creation_fr'] ?></em></h3>
                    
            <p><?= nl2br($donnees_bil['contenu']); ?></p>
        </div>

        
        <h2>Commentaires</h2>
        
        <?php
        if($requete_com)
        {
            while($donnees_com = $requete_com->fetch())
            {
                ?>
                
        <p><strong><?= $donnees_com['auteur']; ?></strong> le <em><?= $donnees_com['date_commentaire_fr']; ?></em></p>
        <p><?= $donnees_com['commentaire']; ?></p>
        
                <?php
            }
        }
        $requete_bil->closeCursor();
        $requete_com->closeCursor();
        ?>
        
        
    </body>
</html>
