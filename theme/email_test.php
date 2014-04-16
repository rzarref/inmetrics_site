<?php

require_once('../../../wp-load.php');
// require_once('d:\Pixadelica\Inmetrics\public\wp-load.php');

$selections = "169,158;172,158;172,146;327,161;330,98";
$table = inmetrics_plan_request_email_table("João da Silva", $selections);
$descriptions = inmetrics_plan_request_email_descriptions($selections);
$footer = inmetrics_plan_request_email_footer();
echo inmetrics_plan_request_email_body($table, $descriptions, $footer);
?>
