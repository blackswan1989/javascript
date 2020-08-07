//TODO 날짜 및 시간 계산시 참조

<script type="text/javascript">
$(function(){
 var now = new Date(); //현재 날짜 가져오기
 var year = now.getFullYear(); //현재 년도 가져오기
 var month = now.getMonth(); // 현재 월 가져오기
 var day = now.getDate(); //현재 일 가져오기
 var hour = now.getHours(); //현재 시간 가져오기
 var minute = now.getMinutes(); //현재 분 가져오기
 var second = now.getHours(); //현재 초 가져오기

 var today = new Date(year,month,day); //오늘 날짜 시간제외
 var yesterday = new Date(year,month,day - 1); //어제 날짜 시간제외
 var desterday = new Date(year,month,day - 2); //그저께 날짜 시간제외
});
</script>