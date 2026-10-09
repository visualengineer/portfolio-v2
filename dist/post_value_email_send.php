<?php
//1 - define vars
$email = "james@jamesgarnham.com";
$subject = "jamesgarnham.com: Pro Bono Referral";
$pro_name = "";
$pro_coname = "";
$pro_email = "";
$pro_phone = "";
$pro_country = "";
$pro_comment = "";
//$client_title  = "";
//$pro_name  = "";
//$client_lastname = "";
//$client_phone = "";
//$patient_name = "";
//$patient_species = "";
//$patient_age = "";
//$patient_gender = "";
//$patient_insured = "";
//$patient_travel = "";
//$patient_notes = "";
//$patient_reason = "";
//2 - Check for form values
if( isset( $_POST["pro_name"])){
  $pro_name     = sanitize_input($_POST["pro_name"]);
  $pro_coname = sanitize_input($_POST["pro_coname"]);
  $pro_email    = sanitize_input($_POST["pro_email"]);
  $pro_phone    = sanitize_input($_POST["pro_phone"]);
  $pro_country     = sanitize_input($_POST["pro_country"]);
  $pro_comment = sanitize_input($_POST["pro_comment"]);
  //$vet_remember = sanitize_input($_POST["vet_remember"]);
  //$client_title     = sanitize_input($_POST["client_title"]);
  //$client_firstname = sanitize_input($_POST["client_firstname"]);
  //$client_lastname  = sanitize_input($_POST["client_lastname"]);
  //$client_phone     = sanitize_input($_POST["client_phone"]);
  //$patient_name     = sanitize_input($_POST["patient_name"]);
  //$patient_species  = sanitize_input($_POST["patient_species"]);
  //$patient_age      = sanitize_input($_POST["patient_age"]);
  //$patient_gender   = sanitize_input($_POST["patient_gender"]);
  //$patient_insured  = sanitize_input($_POST["patient_insured"]);
  //$patient_travel   = sanitize_input($_POST["patient_travel"]);
  //$patient_notes    = sanitize_input($_POST["patient_notes"]);
  //$patient_reason   = sanitize_input($_POST["patient_reason"]);
  //$patient_terms    = sanitize_input($_POST["patient_terms"]);
}
//3 - confirm data and send email
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";


if ($pro_name  != "") {
    // mail message



    $msg = '<html><body>';
    $msg .= '<h1>Pro Bono Referral</h1>';
    $msg .= '<h2>Pro Bono referral&apos;s details</h2>';
    $msg .= '<p><b>Name:</b><br>' . $pro_name . '</p>';
    $msg .= '<p><b>Company name:</b><br>' . $pro_coname . '</p>';
    $msg .= '<p><b>Email:</b><br>' . $pro_email . '</p>';
    $msg .= '<p><b>Contact no.:</b><br>' . $pro_phone . '</p>';
    $msg .= '<p><b>Country:</b><br>' . $pro_country . '</p>';
    $msg .= '<p><b>Comment:</b><br>' . $pro_comment . '</p>';
    //$msg .= '<br><h2>Client details</h2>';
    //$msg .= '<p><b>Client name:</b><br>' . $client_title . '&nbsp;' . $client_firstname . '&nbsp;' . $client_lastname . '</p>';
    //$msg .= '<p><b>Client phone no.:</b><br>' . $client_phone . '</p>';
    //$msg .= '<br><h2>Patient Details</h2>';
    //$msg .= '<p><b>Patient name:</b><br>' . $patient_name . '</p>';
    //$msg .= '<p><b>Patient species:</b><br>' . $patient_species . '</P>';
    //$msg .= '<p><b>Patient age:</b><br>' . $patient_age . '</p>';
    //$msg .= '<p><b>Patient gender and neutering status:</b><br>' . $patient_gender . '</p>';
    //$msg .= '<p><b>Is the patient insured?:</b><br>' . $patient_insured . '</p>';
    //$msg .= '<p><b>Can the patient travel?:</b><br>' . $patient_travel . '</p>';
    //$msg .= '<p><b>Patient cautions, behavioural handling notes:</b><br>' . $patient_notes . '</p>';
    //$msg .= '<p><b>Reason for referral:</b><br>' . $patient_reason . '</p>';
    $msg .= '</body></html>';










    //
    // send email
    mail($email, $subject, $msg, $headers);
    $data = array("request_suc" => "y", "request_class" => "alert-success","request_text" => "Thank you. I'll respond shortly.", "request_button" => "close");
    header("Content-Type: application/json");
    echo  json_encode($data);
    exit();
}
//Helper Functions
///////////////////////////////////////
function sanitize_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
  }
?>