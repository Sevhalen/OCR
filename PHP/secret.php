<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Codes d'acces au serveur central de la NASA</title>
    </head>
    <body>
        
        <?php
        if(isset($_POST['mot_de_passe']) AND $_POST['mot_de_passe'] == "kangourou")
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
        ?>
        
    </body>
</html>
