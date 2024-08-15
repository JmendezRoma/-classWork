
var ctx= document.getElementById("myGraph").getContext("2d");
                

        var myGraph = new Chart(ctx,{
            type:"bar",
            data:{
                labels:["Septiembre", "Octubre", "Noviembre", "Diciembre","Enero","febrero", "Marzo", "Abril", "Mayo", "Junio","Julio","Agosto",],
                datasets:[{
                    label:"Profits",
                    data:[10,20,15,7,60,130,34,120,234,144,100,29],
                    backgroundColor:[
                        'rgb(0, 153, 25)',
                        'rgb(0, 255, 15)',
                        'rgb(255, 102, 102)',
                        'rgb(102, 51, 0)',
                        'rgb(0, 153, 255)',
                        'rgb(0, 255, 15)',
                        'rgb(25, 102, 102)',
                        'rgb(102, 51, 0)',
                        'rgb(0, 13, 255)',
                        'rgb(0, 255, 15)',
                        'rgb(255, 32, 1802)',
                        'rgb(2, 51, 0)'
                    ]
                    
                }
            ]
            },
            options:{
                scales:{
                    lengend: {
                        position:'right', 
                    labels:{
                        fontColor:'#fff'
                    }
                },
                    yAxes:[{
                        ticks:{
                            beginAtZero:true
                        }
                    }]
                },
            }
        });