<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>Page protegee par mot de passe</title>
    </head>
    
    
    <body>
        <p>Veuillez entrer le mot de passe pour obtenir les codes d'acces au serveur
            central de la NASA :</p>
        <form action="formulaire.php" method="post">
            <p>
                <input type='password' name="mot_de_passe" />
                <input type="submit" value="Valider" />
            </p>
        </form>
        
        <?php
        if(isset($_POST['mot_de_passe'])) // Bloque l'affichage d'infos au premier lancement de la page
        {
            if($_POST['mot_de_passe'] == "kangourou")
            {
                ?>
        
                <h1>Voici les codes d'acces :</h1>
                <p><strong>CRD5-CHTD6-CHDJ8-HDNKQ-CNKI9</strong></p>
                <p>La NASA vous remercie de votre visite.</p>
            
                <?php
            }
            else
            {
                echo '<p>Mot de passe errone.</p>';
            }
        }
        ?>
        
        <p>Cette page est reservee au personnel de la NASA.</p>
    </body>
</html>
