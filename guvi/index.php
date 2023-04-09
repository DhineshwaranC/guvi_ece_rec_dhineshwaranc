<?php


foreach (glob("php/*.php") as $filename) {
    include $filename;
}
?>
