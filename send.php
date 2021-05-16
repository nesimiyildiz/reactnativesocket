<?php
 //$tokens = implode(',',$tokens);
        $api_key = "AAAABIWaDFw:APA91bEBoiMLdr7quK_oLYbvqmg-c62wyiysXDDbXkEZ5OgiTo2x_LKF5bfM7Bg0TovZWV8ifGeVHsUBeynQLg3R8uxJaTfq6EGkLjU3aXhDjREF83XoQSGKUSP_R0QOo4Ac4hsVNG8r";
        $fcm = "e4vJjo1yTKWm6efcDTPtx-:APA91bGw9VrfAT4_Z7hMO-ZI9hDwOleqdokN_W3z_vS8vPiAhtKtprnviNdKF_vvAA8zK44GwS7myPu5Cm1gtCMD8h0ybN2xrsdww6YDt9V3gP86M41M2sUMIIhqCcrZKxdelAw3kJ60";
        $body = "Bu kısım php den geldi";
        $title = "Bildirim";
        $fields = array(
            "body" => $body,
            "title" => $title,
        );


        $fields = array(
             "to" => $fcm,
            // "registration_ids" =>[
            //     "AAAABIWaDFw:APA91bEBoiMLdr7quK_oLYbvqmg-c62wyiysXDDbXkEZ5OgiTo2x_LKF5bfM7Bg0TovZWV8ifGeVHsUBeynQLg3R8uxJaTfq6EGkLjU3aXhDjREF83XoQSGKUSP_R0QOo4Ac4hsVNG8r",
                
            // ],
            "notification" => $fields,
            "priority"=>'high',
            "content_available"=>true,
            "apns"=> [ 'payload' => [ 'aps' =>[ "content-available"=> true,'contentAvailable'=>true ]] ],
            "contentAvailable"=>true

        );






        $fields= json_encode($fields);

        $headers = array
        (
            'Authorization: key='. $api_key,
            'Content-Type: application/json'
        );
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, 'https://fcm.googleapis.com/fcm/send');
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_POSTFIELDS, ( $fields));
        curl_setopt($ch, CURLOPT_TIMEOUT, 10); //timeout in seconds

        $result = curl_exec($ch);
        $x = json_decode($result,true);
        print_r($x);
        curl_close($ch);

