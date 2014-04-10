<?php 
function inmetrics_email_image($field_name) {
  $attachment_id = get_field($field_name, 'options');  
  $image = wp_get_attachment_image_src($attachment_id, 'full' );
  echo '<img src="'. $image[0] . '" width="' . $image[1] . '" />';
}

function inmetrics_generate_email($name, $email, $selections) { 
  ob_start();
?>
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <title><?php wp_title( '|', true, 'right' ); ?></title>
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <style type="text/css">
    @media only screen and (max-device-width: 480px) {
      table[class=conteudo] {
        width: 320px !important;
      }
      td[class=header] img {
        height: auto !important;
        width: 100% !important;
      }
    }
 </style>
<body>
<table class="conteudo" width="600" border="0" align="center" cellpadding="0" cellspacing="0" >
  <tr>
    <td width="466" bgcolor="#000000"><table width="100%" border="0" cellspacing="0" cellpadding="15">
      <tr>
        <td style="font-family: 'Trebuchet MS', Arial, Helvetica, sans-serif; font-size: 14px; color: #FFF;">
          <?php printf(__("Hello, %s", "inmetrics"), $name); ?><br />
          <?php _e("Here's your efficiency plan for all IT's layers", "inmetrics"); ?></td>
      </tr>
    </table></td>
    <td width="143" bgcolor="#000000"><?php inmetrics_email_image('email_logo_image'); ?></td>
  </tr>
</table>
</body>
</html>
<?php 
  return ob_get_clean();
} 
?>