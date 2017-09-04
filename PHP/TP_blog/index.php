<!DOCTYPE html>

<html>
    <head>
        <meta charset="utf8">
        <title>Mon Blog</title>
        <link href="style_blog.css" rel="stylesheet">
    </head>
    
    <body>
        
        <h1>Da Supa Blog !</h1>
        
        <?php
        // Connexion à la base de donnees
        try
        {
            // Connexion a la bdd
            $bdd = new PDO('mysql:host=localhost;dbname=OCR_test;charset=utf8', 'root', 'root');
        } catch (Exception $ex)
        {
            // En cas d'erreur, affichage d'un message et arret de l'application
            die('Erreur : ' . $ex->getMessage());
        }
        
        $requete = $bdd->query('SELECT ID, titre, contenu, DATE_FORMAT(date_creation, \'%d%m%Y à %Hh%imin%ss\') AS date_creation_fr'
                                . ' FROM billets ORDER BY date_creation DESC LIMIT 0, 5');
        
        if($requete)
        {
            while($donnees = $requete->fetch())
            {
                ?>
                <div class="news">
                    <h3><?= $donnees['titre']; ?>
                        <em><?= $donnees['date_creation_fr'] ?></em></h3>
                    
                    <p>
                        <?= nl2br($donnees['contenu']); ?><br>
                        <em><a href="commentaires.php?billet=<?= $donnees['ID']; ?>">
                                Commentaires
                        </a></em>
                    </p>
                </div>
        
                <?php
            } // Fin de boucle d'affichage des billets
            $requete->closeCursor();
        }
        
            ?>
        
    </body>
    
</html>

