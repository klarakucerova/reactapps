<?php get_header(); ?>

<div id="primary" class="content-area">
    <main id="main" class="site-main container">
        <?php
        while ( have_posts() ) :
            the_post();
            ?>
            <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

                <div id="react-app" class="react"></div>

            </article>
        <?php endwhile; ?>
    </main>
</div>

<?php get_footer(); ?>