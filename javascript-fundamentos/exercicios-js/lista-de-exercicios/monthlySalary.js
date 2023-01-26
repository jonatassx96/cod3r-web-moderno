function monthlySalary (workedHours, hoursSalary) {
    const salary = hoursSalary * workedHours
    console.log(`Você trabalhou ${workedHours} horas esse mês.
    Com seu salario hora de R$ ${hoursSalary},
    Seu salario mensal foi de R$ ${salary}`);
}

monthlySalary (160, 11)