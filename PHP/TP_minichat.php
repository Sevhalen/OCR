<!DOCTYPE html>

<html>
    <head>
        <meta charset="utf8">
        <title>TP Mini-chat</title>
    </head>

    <style>
        form
        {
            text-align:center;
        }
    </style>
    
    <body>
        <!-- Appel a une page annexe pour le traitement des messages
                a envoyer a la BdD pour smplifier la gestion du code -->
        <form action="TP_minichat_post.php" method="post">
            <p>                
                <label for="pseudo">Pseudo : </label><input type='text' name="pseudo" id="pseudo">
                <label for="message">Message : </label><input type='text' name="message" id="message">
                <input type="submit" value="Envoyer">
            </p>
        </form>

        <h3>Minichat</h3>
        
        <?php
     
            // Recuperation des messages de la BdD
            try
            {
                // Connexion a la bdd
                $bdd = new PDO('mysql:host=localhost;dbname=OCR_test;charset=utf8', 'root', 'root');
            } catch (Exception $ex)
            {
                // En cas d'erreur, affichage d'un message et arret de l'application
                die('Erreur : ' . $ex->getMessage());
            }
            
            // Recuperation des 10 derniers messages, dans l'ordre ID decroissant
            $reponse = $bdd->query('SELECT pseudo, message FROM minichat ORDER BY ID DESC Limit 0, 10');
            
            // Boucle d'affichage des messages recuperes
            // fetch : recuperation 1 a 1 a partir du premier message recupere
            // de la BdD
            if($reponse) {            
            while($donnees = $reponse->fetch())
            {
                ?>
                <p>
                <strong><?= $donnees['pseudo'] . ' - '; ?></strong>
                <?= $donnees['message']; ?>
                </p>
            <?php
            }}
            ?>
    </body>
</html>