let calc = {
    numbA: '',
    act: null,
    numbB: '',
}

$(document).ready(function () {
    console.log(calc);
     $(".vvd").text(0);

     $("#1").click(function() {
         console.log("#1");

         if (calc.act === null) {
            calc.numbA = 1;
         } else {
             calc.numbB = 1;
         }

         console.log(calc);
     });

     $("#plus").click(function() {
         console.log("#plus");
         
         calc.act = 'plus';

         console.log(calc);
     });

     $("#rvn").click(function() {
        console.log("#rvn");
        let rvn = null;
        if (calc.act === "plus") {
            rvn = Number(calc.numbA) + Number(calc.numbB);
        }
        if (calc.act === "mine") {
            rvn = Number(calc.numbA) - Number(calc.numbB);
        }
        if (calc.act === "divi") {
            rvn = Number(calc.numbA) / Number(calc.numbB);
        }
        if (calc.act === "mult") {
            rvn = Number(calc.numbA) * Number(calc.nunbB)
        }
        $(".vvd").text(rvn);
    });
  });