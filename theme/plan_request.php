<?php

if(!isset($_POST['plan_request']))
  exit();

$plan_request = $_POST['plan_request'];

define("ICL_LANGUAGE_CODE", $plan_request['language_code']);
define("FORCE_LANGUAGE", $plan_request['language_code']);

require_once('../../../wp-load.php');
// require_once('d:\Pixadelica\Inmetrics\public\wp-load.php');

$plan_request = $_POST['plan_request'];
$name = $plan_request['name'];
$email = $plan_request['email'];
$message = $plan_request['message'];
$selections = $plan_request['selections'];

$front_page_id = get_option('page_on_front');

if(!isset($name) || trim($name) === '' ||
   !isset($email) || trim($email) === '' ||
   !filter_var($email, FILTER_VALIDATE_EMAIL) ||
   !isset($message) || trim($message) === '')
{
  header('inmetrics_plan_request: failure');
  exit();
}
$post_id = wp_insert_post(array(
  'post_title' => $name,
  'post_status' => 'publish',
  'post_type'   => 'plan_request',
));
$email_table = inmetrics_plan_request_email_table($name, $selections);
$email_descriptions = inmetrics_plan_request_email_descriptions($selections);
$email_footer = inmetrics_plan_request_email_footer();
add_post_meta($post_id, 'email', $email);
add_post_meta($post_id, 'message', $message);
add_post_meta($post_id, 'selections', $selections);
add_post_meta($post_id, 'email_table', $email_table);
add_post_meta($post_id, 'email_descriptions', $email_descriptions);
add_post_meta($post_id, 'email_footer', $email_footer);

$body = inmetrics_plan_request_email_body($email_table, $email_descriptions, $email_footer);
$to = "$name <$email>";
$subject = __("Prepared for the efficiency that transforms?", "inmetrics");
$headers = "Content-type: text/html\r\n";
wp_mail($to, $subject, $body, $headers);

$forward_subject = sprintf(__('Efficiency plan sent to %s <%s>'), $name, $email);
$forward_emails = get_field('email_forward_addresses', 'options');
foreach(explode(',', $forward_emails) as $forward_to)
  wp_mail(trim($forward_to), $forward_subject, $body, $headers);

header('inmetrics_plan_request: success');
$message = get_field('contact_form_success_message', $front_page_id);
echo($message);

?>
