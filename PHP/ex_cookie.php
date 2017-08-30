<?php
// Ecriture du cookie
setcookie('pseudo', 'Snow', time() + 3600, null, null, false, true);
// Ecriture d'un autre cookie
setcookie('continent', 'Westeros', time() + 3600, null, null, false, true);

// Let's deal avec le reste du code seulement maintenant !
?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Essai avec les cookies</title>
    </head>
    <body>
        <p>
            Salut <?= $_COOKIE['pseudo']; ?>
        </p>
        <p>
            Alors comme ça on vient de <?= $_COOKIE['continent']; ?> ??
        </p>
    </body>
</html>

