<?php $langcode = inmetrics_get_current_language_code(); ?>

<div id="home-popup" class="desktop mfp-hide" data-lang="<?php echo $langcode ?>"></div>

<section id="apresenta" class="borders desktop">
  <div class="mid pR">
    <h2 class="fL rpc"><?php t_img('header_image'); ?></h2>
    <p class="fR rpc"><?php t_img('sub_header_image'); ?></p>
    <span class="olho"></span>
    <span class="olho-2"></span>
    <span class="olho-3"></span>
  </div>
</section>

<?php $strategic = inmetrics_get_efficiency_by_shortcode_slug('strategic'); ?>
<section id="strategic" class="pR desktop">
  <div class="mid pR">
    <h2 class="rpc fL z1"><?php t_img("animation_title_image", $strategic->ID); ?></h2>
    <img src="<?php t_url("images/ilustracoes/1cena.gif") ?>" class="img-cena fR" />
    <img src="<?php t_url("images/ilustracoes/1projeto.png") ?>" class="img-projeto fL" />
    <img src="<?php t_url("images/ilustracoes/1nuvens-$langcode.png") ?>" class="img-nuvens fR" />
    <?php inmetrics_efficiency_table('strategic', true); ?>
  </div>
</section>

<?php $management = inmetrics_get_efficiency_by_shortcode_slug('management'); ?>
<section id="management" class="borders desktop">
  <div class="mid oH">
    <h2 class="rpc fL z1"><?php t_img("animation_title_image", $management->ID); ?></h2>
    <img src="<?php t_url("images/ilustracoes/2cena.gif") ?>" class="img-cena fR" />
    <?php inmetrics_efficiency_table('management', false); ?>
  </div>
</section>

<?php $operational = inmetrics_get_efficiency_by_shortcode_slug('operational'); ?>
<section id="operational" class="desktop">
  <div class="mid oH">
    <h2 class="rpc fL z1"><?php t_img("animation_title_image", $operational->ID); ?></h2>
    <img src="<?php t_url("images/ilustracoes/3fileira3.png"); ?>" class="fil-3 fR" />
    <img src="<?php t_url("images/ilustracoes/3fileira2.png"); ?>" class="fil-2 fR" />
    <span class="fil-1 fR"></span>
    <?php inmetrics_efficiency_table('operational', true); ?>
  </div>
</section>

<?php $functional = inmetrics_get_efficiency_by_shortcode_slug('functional'); ?>
<section id="functional" class="borders desktop">
  <div class="mid pR oH">
    <h2 class="rpc fL z1"><?php t_img("animation_title_image", $functional->ID); ?></h2>
    <img src="<?php t_url("images/ilustracoes/4cena.gif") ?>" class="img-cena fR" />
    <img src="<?php t_url("images/ilustracoes/4nuvens.png") ?>" class="img-nuvens fR" />
    <span class="peao tC">
      <img src="<?php t_url("images/ilustracoes/4peao_cabeca.png") ?>" class="img-peao-cabeca" />
      <img src="<?php t_url("images/ilustracoes/4peao_corpo.png") ?>" class="img-peao-corpo" />
      <img src="<?php t_url("images/ilustracoes/4peao_base.png") ?>" class="img-peao-base" />
    </span>
    <?php inmetrics_efficiency_table('functional', false); ?>
  </div>
</section>

<?php $quality = inmetrics_get_efficiency_by_shortcode_slug('quality'); ?>
<section id="quality" class="desktop">
  <div class="mid pR oH">
    <h2 class="rpc z1"><?php t_img("animation_title_image", $quality->ID); ?></h2>
    <img src="<?php t_url("images/ilustracoes/5cena.gif") ?>" class="img-cena fL" />
    <img src="<?php t_url("images/ilustracoes/5nuvens.png") ?>" class="img-nuvens" />
    <img src="<?php t_url("images/ilustracoes/5coroa.png") ?>" class="img-coroa" />
    <img src="<?php t_url("images/ilustracoes/5projeto.png") ?>" class="img-projeto" />
    <img src="<?php t_url("images/ilustracoes/5raios.png") ?>" class="img-raios" />
    <?php inmetrics_efficiency_table('quality', true); ?>
  </div>
</section>

<section id="contato" class="borders desktop">
  <div class="mid">
    <div class="contact-form">
      <div class="wrapper">
        <div class="section">
         <form action="<?php t_url("plan_request.php"); ?>" method="post" class="desktop">
            <h2><?php the_field("contact_form_title", $post->ID); ?></h2>
            <div class="result-message"></div>
            <ul>
              <li>
                <input type="text" id="name" name="plan_request[name]"
                  placeholder="<?php esc_attr_e('your name', 'inmetrics'); ?>"
                  autocomplete="off" maxlength="255"
                  value="<?php esc_attr_e($_POST['plan_request']['name']); ?>" />
              </li>
              <li>
                <input type="text" id="email_input" name="plan_request[email]" placeholder="<?php esc_attr_e('your e-mail', 'inmetrics'); ?>" autocomplete="off" maxlength="255" />
              </li>
              <li>
                <input type="text" name="plan_request[email_confirmation]" placeholder="<?php esc_attr_e('confirm your e-mail', 'inmetrics'); ?>" autocomplete="off" maxlength="255" />
              </li>
              <li>
                <textarea name="plan_request[message]" placeholder="<?php esc_attr_e('your message', 'inmetrics'); ?>" rows="7"></textarea>
              </li>
              <li>
                <input type="hidden" id="selections-input" name="plan_request[selections]" />
                <input type="hidden" name="plan_request[language_code]"
                       value="<?php global $sitepress; echo $sitepress->get_current_language(); ?>" />
                <input type="submit" value="<?php esc_attr_e('Submit', 'inmetrics'); ?>" />
                <div class="spinner"></div>
              </li>
            </ul>
          </form>
          <h2 class="mobile"><?php the_field("contact_form_mobile_title", $post->ID); ?></h2>
          <div class="addresses">
            <?php the_field("contact_form_addresses", $post->ID); ?>
          </div>
        </div>
        <div class="section">
          <ul class="social">
            <?php inmetrics_social_links_nav(); ?>
          </ul>
          <img alt="In/Metrics" src="<?php echo get_template_directory_uri(); ?>/images/logo.png" class="logo desktop" />
        </div>
      </div>
    </div>
  </div>
  <?php get_template_part("lang-footer"); ?>
</section>

<div class="mobile mobile-efficiencies">
  <h1 class="mobile-header"></h1>
  <div class="mobile-divider"></div>
  <?php inmetrics_mobile_efficiencies(); ?>
</div>

<div class="mobile mobile-contact-form">
  <h2><?php the_field("contact_form_mobile_title", $post->ID); ?></h2>
  <div class="addresses">
    <?php the_field("contact_form_addresses", $post->ID); ?>
  </div>
  <div class="section">
    <ul class="social">
      <?php inmetrics_social_links_nav(); ?>
    </ul>
    <img alt="In/Metrics" src="<?php echo get_template_directory_uri(); ?>/images/logo.png" class="logo desktop" />
  </div>
</div>
