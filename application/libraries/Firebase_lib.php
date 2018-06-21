<?php
defined('BASEPATH') OR exit('No direct script access allowed');

require __DIR__.'/vendor/autoload.php';

use Kreait\Firebase\Factory;
use Kreait\Firebase\ServiceAccount;
use Firebase\Auth\Token\Exception\InvalidToken;

class Firebase_lib
{
    /**
     * @var Firebase_sing
     */
    private $firebase_sing = null;

    public function __construct()
    {
        if($this->firebase_sing === null){
            $serviceAccount = ServiceAccount::fromJsonFile(dirname(__FILE__).DIRECTORY_SEPARATOR.'vendor'.DIRECTORY_SEPARATOR.'fcul-projetofinal-1718-firebase-adminsdk-zbhcg-792fc39e80.json');
            $this->firebase_sing = (new Factory)
                ->withServiceAccount($serviceAccount)
                ->create();
        }
    }

    public function getFirebase()
    {
        return $this->firebase_sing;
    }

    public function verifyToken($idTokenString)
    {
        try {
            $verifiedIdToken = $this->firebase_sing->getAuth()->verifyIdToken($idTokenString);
        } catch (InvalidToken $e) {
            return $e->getMessage();
        }
        
        $uid = $verifiedIdToken->getClaim('sub');
        return $this->firebase_sing->getAuth()->getUser($uid);
    }
}
