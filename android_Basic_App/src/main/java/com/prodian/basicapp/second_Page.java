package com.prodian.basicapp;

import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;

import org.w3c.dom.Text;

public class second_Page extends AppCompatActivity {


    String name,email,mobile;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_second_page);


        Intent intent = getIntent();
        name=intent.getStringExtra("name");
        email=intent.getStringExtra("email");
        mobile=intent.getStringExtra("mobile");
        TextView text_name, text_email, text_mobile;
        text_name =(TextView)findViewById(R.id.tv_name);
        text_name.setText(name);
        text_email =(TextView)findViewById(R.id.tv_email);
        text_email.setText(email);
        text_mobile =(TextView)findViewById(R.id.tv_mobile);
        text_mobile.setText(mobile);

    }

    public void mainPage(View view){
        Intent intent = new Intent(getApplicationContext(),MainActivity.class);
        startActivity(intent);
    }
}