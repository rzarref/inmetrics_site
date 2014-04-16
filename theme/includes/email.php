<?php
require_once('helpers.php');

function inmetrics_plan_request_email_table($name, $selections) {
  global $sitepress;
  $lang = $sitepress->get_current_language();

  $hello = sprintf(__("Hello, %s", "inmetrics"), $name);
  $title = __("Here's your efficiency plan for all IT's layers", "inmetrics");
  $project_types = inmetrics_get_project_types_with_counts();
  $efficiencies = inmetrics_get_efficiencies();
  $projects = inmetrics_get_projects();
  print_r($selected_project_ids);
  $project_type_headers = join(array_map(function($project_type) {
    $count = $project_type->total;
    $header = img_tag('email_header_image', $project_type->ID);
    return "<td colspan='$count' valign='bottom'>$header</td>";
  }, $project_types));

  $logo_url = rel_url("images/email/logo.gif");
  $header_url = rel_url("images/email/header-$lang.gif");
  $inspire_img_url = rel_url("images/email/inspire.gif");

  $selected_project_ids = inmetrics_get_selected_project_ids($selections);
  $project_headers = "";
  foreach($projects as $project) {
    if(in_array($project->ID, $selected_project_ids))
      $img = img_tag('email_header_selected_image', $project->ID);
    else
      $img = img_tag('email_header_unselected_image', $project->ID);
    $project_headers = $project_headers . "<td align='center' valign='bottom'>$img</td>";
  }

  return <<<"HTML"
    <table class="conteudo" width="600" border="0" align="center" cellpadding="0" cellspacing="0" >
      <tr>
        <td width="466" bgcolor="#000000">
          <table width="100%" border="0" cellspacing="0" cellpadding="15">
            <tr>
              <td style="font-family: 'Trebuchet MS', Arial, Helvetica, sans-serif; font-size: 14px; color: #FFF;">
                $hello<br />$title
              </td>
            </tr>
          </table>
        </td>
        <td width="143" bgcolor="#000000"><img src="$logo_url" width="140" height="73"></td>
      </tr>
      <tr>
        <td colspan="2"><img src="$header_url" width="600" height="254" /></td>
      </tr>
      <tr>
        <td colspan="2">
          <table width="600" border="0" cellspacing="2" cellpadding="1">
            <tr>
              <td width="100%" valign="bottom"></td>
              $project_type_headers
            </tr>
            <tr>
              <td width='100%'><img src="$inspire_img_url" width="176" height="118"></td>
              $project_headers
            </tr>
          </table>
        </td>
      </tr>
    </table>
HTML;
}

function inmetrics_plan_request_email_descriptions($selections) {
  // TODO: descriptions of selected services
  return "";
}

function inmetrics_plan_request_email_body($table, $descriptions) {
  return <<<"HTML"
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
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
  $table
  $descriptions
</body>
</html>
HTML;
}

?>