<?php
defined('BASEPATH') OR exit('No direct script access allowed');
    //computes date
    function computeDate($year, $month, $day, $hour, $minutes, $duration)
    {
      $month30=array(4,6,9,11);
      $month31=array(1,3,5,7,8,10,12);

      if(in_array($month, $month30)){
        $day_max = 30;
      }
      elseif(in_array($month, $month31)){
        $day_max = 31;
      }
      else{
        $day_max = 28;
      }

      if($day>$day_max){
        $month+=1;
        $day-=$day_max;
      }

      $s_month = check_ten($month);
      $s_day = check_ten($day);
      $s_hour = check_ten($hour);
      $s_minutes = check_ten($minutes);
      $initial_date=$year."-".$s_month."-".$s_day." ".$s_hour.":".$s_minutes.":00";

      $minutes+=$duration;
      while($minutes>59){
        $hour+=1;
        $minutes-=60;
      }

      $s2_hour = check_ten($hour);
      $s2_minutes = check_ten($minutes);
      $end_date=$year."-".$s_month."-".$s_day." ".$s2_hour.":".$s2_minutes.":00";
      return array($month, $day, $initial_date, $end_date);
    }

    function checkTen($arg){
      if($arg<10){
        return "0".$arg;
      }
      return $arg;
    }
?>
