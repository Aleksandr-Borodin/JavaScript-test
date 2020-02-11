<?php
if(isset($_POST) && !empty($_POST)) {
    echo 'Данные пришли методом Post: ' . "<br>";
    var_dump($_POST);
} else if(isset($_GET) && !empty($_GET)) {
    echo 'Данные пришли методом Get: ' . "<br>";
    var_dump($_GET);
} else {
    echo 'Метод передачи данных Post или Get' . "<br>";
    var_dump($_POST);
    echo "<br>";
    var_dump($_GET);
}
