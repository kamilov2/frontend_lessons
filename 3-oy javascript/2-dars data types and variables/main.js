let data_client = {  
    client_1:[{
        name:"Alex",
        data:[
            {
                phone_number:900000000                
            },
            {
                age:15
            }
        ]
    },
    {
        name:"Jake"
    },
    {
        name:"Jordan"
    }
]    
}
console.log(data_client.client_1[0].data[1].age)