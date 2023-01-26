function checkMonthToYear(number) {
  if (number >= 1 && number <= 12){
    switch (number) {
      case 1:
        console.log("Estamos no mês de Janeiro!");
        break;
      case 2:
        console.log("Estamos no mês de Fevereiro!");
        break;
      case 3:
        console.log("Estamos no mês de Março!");
        break;
      case 4:
        console.log("Estamos no mês de Abril!");
        break;
      case 5:
        console.log("Estamos no mês de Maio!");
        break;
      case 6:
        console.log("Estamos no mês de Junho!");
        break;
      case 7:
        console.log("Estamos no mês de Julho!");
        break;
      case 8:
        console.log("Estamos no mês de Agosto!");
        break;
      case 9:
        console.log("Estamos no mês de Setembro!");
        break;
      case 10:
        console.log("Estamos no mês de Outubro!");
        break;
      case 11:
        console.log("Estamos no mês de Novembro!");
        break;
      case 12:
        console.log("Estamos no mês de Dezembro!");
        break;

      default:
        break;
    }
  } else {
    console.log(
      `Por favor, insira um número entre 1 e 12 para verificar o mês do ano!`
    );
  }
}

checkMonthToYear(12);
