<?php

if(!isset($_POST['plan_request']))   
  exit();

require_once('D:\Pixadelica\InMetrics\public\wp-load.php');

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
  echo get_field('contact_form_failure_message', $front_page_id);
  exit();
}
$post_id = wp_insert_post(array(
  'post_title' => $name, 
  'post_status' => 'publish',
  'post_type'   => 'plan_request',
));
add_post_meta($post_id, 'email', $email);
add_post_meta($post_id, 'message', $message);
add_post_meta($post_id, 'selections', $selections);
add_post_meta($post_id, 'email_body', inmetrics_generate_email($name, $email, $selections));

header('inmetrics_plan_request: success');
echo get_field('contact_form_success_message', $front_page_id);

?>