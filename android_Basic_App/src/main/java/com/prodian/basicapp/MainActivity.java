package com.prodian.basicapp;

import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    public void display(View view){
        AlertDialog.Builder dialog=new AlertDialog.Builder(this);
        dialog.setMessage(s_name+" "+s_email+"  "+s_mobile);
        dialog.setTitle("My Title");
        dialog.show();
    }

    String s_name,s_email,s_mobile;
    public void getData(View view){
        EditText name=(EditText)findViewById(R.id.et_Name);
        EditText email=(EditText)findViewById(R.id.et_Email);
        EditText mobile=(EditText)findViewById(R.id.et_Mobile);

        s_name = name.getText().toString();
        s_email = email.getText().toString();
        s_mobile = mobile.getText().toString();

        Toast.makeText(MainActivity.this," Saved Successfullly !!! ",Toast.LENGTH_LONG).show();

    }

    public void showToast(View view){
        Toast.makeText(MainActivity.this,s_name+" "+s_email+"  "+s_mobile,Toast.LENGTH_LONG).show();
    }


    public void nextPage(View view){
        Intent intent = new Intent(getApplicationContext(),second_Page.class);
        intent.putExtra("name",s_name);
        intent.putExtra("email",s_email);
        intent.putExtra("mobile",s_mobile);
        startActivity(intent);
    }

}