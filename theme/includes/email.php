hello<?php
require_once('helpers.php');

function inmetrics_plan_request_email_table($name, $selections) {

  global $sitepress;
  $lang = $sitepress->get_current_language();

  $hello = sprintf(__("Hello, %s", "inmetrics"), $name);
  $title = __("Follow the trail of solutions that you have chosen for Total Efficiency and start the transformation today!", "inmetrics");
  $logo_url = rel_url("images/email/logo.gif");
  $header_url = rel_url("images/email/header-$lang.gif");
  $inspire_img_url = rel_url("images/email/inspire.gif");

  $project_types = inmetrics_get_project_types_with_counts();
  $project_type_headers = "";
  foreach($project_types as $project_type) {
    $colspan = $project_type->total;
    $img = img_tag('email_header_image', $project_type->ID);
    $project_type_headers .= "<td colspan='$colspan' valign='bottom'>$img</td>";
  }

  $projects = inmetrics_get_projects();
  $selected_project_ids = inmetrics_get_selected_project_ids($selections);
  $project_headers = "";
  foreach($projects as $project) {
    if(in_array($project->ID, $selected_project_ids)) {
      $img = img_tag('email_header_selected_image', $project->ID);
      $project_headers .= "<td align='center' valign='bottom' bgcolor='#EDBEC0'>$img</td>";
    }
    else {
      $img = img_tag('email_header_unselected_image', $project->ID);
      $project_headers .= "<td align='center' valign='bottom' bgcolor='#E5E5E5'>$img</td>";
    }
  }

  $efficiencies = inmetrics_get_total_projects_per_efficiency();
  $first_eff_img = img_tag('email_title_image', $efficiencies[0]->ID);
  $first_eff_rowspan = $efficiencies[0]->total_projects + 1;
  $first_eff_title_color = get_field('table_title_color', $efficiencies[0]->ID);
  $selected_projects = inmetrics_get_selected_project_ids_by_service_ids($selections);
  $service_rows = "";
  foreach($efficiencies as $eff_index => $efficiency) {
    $services = inmetrics_get_services($efficiency->ID);
    $title_color = get_field('table_title_color', $efficiency->ID);
    $color = get_field('table_background_color', $efficiency->ID);

    foreach($services as $ser_index => $service) {
      $service_rows .= "<tr>";
      if($ser_index == 0 && $eff_index != 0) {
        $img = img_tag('email_title_image', $efficiency->ID);
        $rowspan = $efficiency->total_projects;
        $service_rows .= "<td valign='bottom' bgcolor='$title_color' rowspan='$rowspan'>$img</td>";
      }
      $img = img_tag('email_header_image', $service->ID);
      $service_rows .= "<td width='100%' bgcolor='$color'>$img</td>";
      $selections = $selected_projects[$service->ID];
      if(!isset($selections)) $selections = array();
      foreach($projects as $project) {
        $bg_color = in_array($project->ID, $selected_project_ids) ? "#EDBEC0" : "#E5E5E5";
        $circle_color =  in_array($project->ID, $selections) ? "#B4282D" : $color;
        $service_rows .=
           "<td align=\"center\" valign=\"middle\" bgcolor=\"$bg_color\">" .
           "<span style=\"font-family: 'Trebuchet MS', Arial, Helvetica, sans-serif; " .
           "font-size: 40px; color: $circle_color; line-height: 17px; text-align: center;\">&#8226</span></td>";
      }
      $service_rows .= "</tr>";
    }
  }

  return <<<"HTML"
    <table class="conteudo" width="600" border="0" align="center" cellpadding="0" cellspacing="0">
      <tr>
        <td width="100%" bgcolor="#000000">
          <table width="100%" border="0" cellspacing="0" cellpadding="15">
            <tr>
              <td style="font-family: 'Trebuchet MS', Arial, Helvetica, sans-serif; font-size: 14px; color: #FFF;">
                $hello<br />$title
              </td>
            </tr>
          </table>
        </td>
        <td bgcolor="#000000"><img src="$logo_url" width="140" height="73"></td>
      </tr>
      <tr>
        <td colspan="2"><img src="$header_url" width="600" height="254" /></td>
      </tr>
      <tr>
        <td colspan="2">
          <table width="100%" border="0" cellspacing="2" cellpadding="0">
            <tr>
              <td colspan="2"></td>
              $project_type_headers
            </tr>
            <tr>
              <td valign='bottom' rowspan="$first_eff_rowspan" bgcolor="$first_eff_title_color">$first_eff_img</td>
              <td valign='bottom'><img src="$inspire_img_url" width="176" height="118"></td>
              $project_headers
            </tr>
            $service_rows
          </table>
        </td>
      </tr>
    </table>
HTML;
}

function inmetrics_plan_request_email_descriptions($selections) {
  $selected = inmetrics_get_selected_service_ids($selections);
  $services = inmetrics_get_services_by_ids($selected);

  $what_title = __('What is it?', 'inmetrics');
  $why_title = __('Purpose', 'inmetrics');
  $results_title = __('Results', 'inmetrics');
  $term_title = __('Term', 'inmetrics');

  $service_rows = "";
  foreach($services as $service) {
    $title = $service->post_title;
    $what = get_field('what_is_it', $service->ID, TRUE);
    $why = get_field('what_is_it_for', $service->ID, TRUE);
    $results = get_field('results', $service->ID, TRUE);
    $term = get_field('term', $service->ID, TRUE);
    $service_rows .=
      "<tr><td><p style=\"font-size: 18px; color: #C00\"><strong>$title</strong></p>" .
      "<p><strong>$what_title</strong></p>$what" .
      "<p><strong>$why_title</strong></p>$why" .
      "<p><strong>$results_title</strong></p>$results" .
      "<p><strong>$term_title</strong></p>$term" .
      "<p>&nbsp;</p></td></tr>";
  }
  return <<<"HTML"
  <table class="descricoes" width="600" border="0" align="center" cellpadding="0" cellspacing="0">
  $service_rows
  </table>
HTML;
}

function inmetrics_plan_request_email_footer() {
  global $sitepress;
  $lang = $sitepress->get_current_language();

  $main_url = rel_url("images/email/footer-main-$lang.gif");
  $left_url = rel_url("images/email/footer-left.gif");
  $right_url = rel_url("images/email/footer-right.gif");
  $social_url = rel_url("images/email/footer-social.gif");

  $contact_city = __('São Paulo - Brazil', 'inmetrics');
  $contact_phone = __('+55 11 3303.3200', 'inmetrics');
  $contact_email = __('contato@inmetrics.com.br', 'inmetrics');
  $contact_notice = __('This information is confidential. All reproductions require explicit permission from In/Metrics.', 'inmetrics');
  // Este material é conﬁdencial. Toda reprodução, total ou parcial, deve ter a permissão explicita da in/metrics.

  return <<<"HTML"
  <table class="email-footer" width="600" border="0" align="center" cellpadding="0" cellspacing="0">
    <tr>
      <td bgcolor="#000000"><img src="$main_url" width="600" height="139" usemap="#Map2"></td>
    </tr>
    <tr bgcolor="#666666">
      <td align="center" valign="top" bgcolor="#323232">
        <table width="100%" border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td rowspan="2" align="left" valign="top"><img src="$left_url" width="202" height="129"></td>
            <td align="center">
              <span style="font-family: 'Trebuchet MS', Arial, Helvetica, sans-serif; color: #FFF; text-align: center; font-size: 13px; line-height:20px;">
              <strong><br>$contact_city</strong><br>$contact_phone<br>
              <a href="mailto:$contact_email" style="color: #FFF; text-decoration:none;">$contact_email<br><br></a></span>
            </td>
            <td rowspan="2" align="right" valign="top"><img src="$right_url" width="200" height="129"></td>
          </tr>
          <tr>
            <td><img src="$social_url" width="197" height="47" usemap="#Map"></td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td>
        <p style="font-size: 11px; font-family: 'Trebuchet MS', Arial, Helvetica, sans-serif; text-align: center; color: #666;"><br>$contact_notice</p>
      </td>
    </tr>
  </table>
  <map name="Map">
    <area shape="rect" coords="100,1,140,31" href="https://www.facebook.com/Inmetrics" target="_blank" alt="Facebook">
    <area shape="rect" coords="18,2,54,32" href="http://www.linkedin.com/company/inmetrics" target="_blank" alt="Linkedin">
    <area shape="rect" coords="146,2,176,30" href="https://twitter.com/inmetrics" target="_blank" alt="Twitter">
    <area shape="rect" coords="60,2,94,32" href="https://www.yammer.com/inmetrics.com.br/" target="_blank" alt="Yammer">
  </map>
  <map name="Map2">
    <area shape="rect" coords="214,77,399,129" href="mailto:$contact_email" target="_blank" alt="e-mail">
  </map>
HTML;
}

function inmetrics_plan_request_email_body($table, $descriptions, $footer) {
  return <<<"HTML"
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <style type="text/css">
    table.conteudo img { display: block; }
    table.descricoes {
      font-family: 'Trebuchet MS', Arial, Helvetica, sans-serif;
      font-size: 13px;
    }
  </style>
<body>
  $table
  $descriptions
  $footer
</body>
</html>
HTML;
}

?>