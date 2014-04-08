    </div>
    <footer>
      <div class="footer desktop">
        <div class="wrapper">
          <nav class="lang" role="navigation">
            <?php inmetrics_language_switcher(); ?>
          </nav>
          <div class="copyright">
            <?php _e("In/metrics 2014 &copy; All rights reserved", 'inmetrics') ?>
          </div>
        </div>
      </div>
    </footer>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
    <script src="<?php t_url("js/inmetrics.min.js"); ?>"></script>
    <?php wp_footer(); ?>
  </body>
</html>
