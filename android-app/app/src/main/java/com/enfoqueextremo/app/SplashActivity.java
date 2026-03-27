package com.enfoqueextremo.app;

import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.view.WindowManager;
import android.widget.ImageView;
import android.widget.TextView;
import android.view.animation.AlphaAnimation;
import android.view.animation.Animation;
import android.view.animation.ScaleAnimation;
import android.view.animation.AnimationSet;

import androidx.appcompat.app.AppCompatActivity;

public class SplashActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // Fullscreen
        getWindow().setFlags(
            WindowManager.LayoutParams.FLAG_FULLSCREEN,
            WindowManager.LayoutParams.FLAG_FULLSCREEN
        );

        setContentView(R.layout.activity_splash);

        // Animate logo
        ImageView logo = findViewById(R.id.splash_logo);
        TextView title = findViewById(R.id.splash_title);
        TextView subtitle = findViewById(R.id.splash_subtitle);

        // Scale + fade in animation for logo
        ScaleAnimation scaleAnim = new ScaleAnimation(
            0.5f, 1.0f, 0.5f, 1.0f,
            Animation.RELATIVE_TO_SELF, 0.5f,
            Animation.RELATIVE_TO_SELF, 0.5f
        );
        scaleAnim.setDuration(800);

        AlphaAnimation fadeIn = new AlphaAnimation(0f, 1f);
        fadeIn.setDuration(800);

        AnimationSet logoAnim = new AnimationSet(true);
        logoAnim.addAnimation(scaleAnim);
        logoAnim.addAnimation(fadeIn);
        logo.startAnimation(logoAnim);

        // Fade in title and subtitle with delay
        AlphaAnimation titleFade = new AlphaAnimation(0f, 1f);
        titleFade.setDuration(600);
        titleFade.setStartOffset(400);
        titleFade.setFillAfter(true);
        title.startAnimation(titleFade);

        AlphaAnimation subtitleFade = new AlphaAnimation(0f, 1f);
        subtitleFade.setDuration(600);
        subtitleFade.setStartOffset(700);
        subtitleFade.setFillAfter(true);
        subtitle.startAnimation(subtitleFade);

        // Navigate to MainActivity after 3 seconds
        new Handler(Looper.getMainLooper()).postDelayed(() -> {
            Intent intent = new Intent(SplashActivity.this, MainActivity.class);
            startActivity(intent);
            overridePendingTransition(android.R.anim.fade_in, android.R.anim.fade_out);
            finish();
        }, 3000);
    }
}
