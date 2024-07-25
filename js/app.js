const greenDivs = document.querySelectorAll('.green__test')
const divInputs = document.querySelectorAll('.column__input')
const divsListPackages = document.querySelectorAll('.list p')
const checkBoxes = document.querySelectorAll('.tick__one')

greenDivs.forEach(element => {
    element.classList.add('d-none')
})
//products quantity
divInputs[0].addEventListener('input', function(event){
    if( divInputs[0].value > 0 ) {
        // console.log('return')
        greenDivs[0].classList.remove('d-none')
        greenDivs[5].classList.remove('d-none') //total

        calc.productsSum = calc.mnozenie(divInputs[0].value, calc.products)
        greenDivs[0].querySelector('.multiplier').textContent = `$${divInputs[0].value} * ${calc.products}`
        greenDivs[0].querySelector('.amount').textContent = `$${calc.productsSum}`

        calc.dodawanie()
    }
    else{
        greenDivs[0].classList.add('d-none')
        showSum()
    }
})
//Orders
divInputs[1].addEventListener('input', function(event){
    if( divInputs[1].value > 0 ){
        greenDivs[1].classList.remove('d-none')
        greenDivs[5].classList.remove('d-none')

        calc.ordersSum = calc.mnozenie(divInputs[1].value, calc.orders)
        greenDivs[1].querySelector('.multiplier').textContent = `$${divInputs[1].value} * ${calc.orders}`
        greenDivs[1].querySelector('.amount').textContent = `$${calc.ordersSum}`

        calc.dodawanie()
    }
    else{
        greenDivs[1].classList.add('d-none')
        showSum()
    }
    
    
})
//packages
divsListPackages.forEach(element => {
    element.addEventListener('click', function(event){
        greenDivs[2].classList.remove('d-none')
        greenDivs[5].classList.remove('d-none')
                                                //this -> p element
        calc.packages.forEach(element => {  //tabe of objects 
            if ( element.pName === this.textContent ){
                greenDivs[2].querySelector('.selectedPackage').textContent = this.textContent
                greenDivs[2].querySelector('.amount').textContent = `$${element.price}`
                calc.packageSum = element.price
                // console.log(element.price)
                // console.log(greenDivs[2].querySelector('.amount').textContent, '<<<<' )
            } 
        calc.dodawanie()
                
        })
    })
})
//accounting
checkBoxes[0].addEventListener('change', function(event){
    if (this.checked) {
        
        greenDivs[3].classList.remove('d-none') //accouting green div
        greenDivs[5].classList.remove('d-none')
        greenDivs[3].querySelector('.amount').textContent = `$${calc.accounting}`
        calc.dodawanie()
    }
    else {
        
        greenDivs[3].classList.add('d-none')
        calc.dodawanie()
        showSum() 
        
    }
})
checkBoxes[1].addEventListener('change', function(event){
    if (this.checked) {
        
        greenDivs[4].classList.remove('d-none')
        greenDivs[5].classList.remove('d-none')
        greenDivs[4].querySelector('.amount').textContent = `$${calc.rental}`
        calc.dodawanie()
    }
    else {
        
        greenDivs[4].classList.add('d-none')
        calc.dodawanie()
        showSum()
    }
})
function showSum(){
//shows or hide the div with summary depending on whether another green div was used befre
    const pom = document.querySelectorAll('.green__test')[0].classList
        const pom1 = [...pom].filter(function(el){
            return el === 'd-none'
        })
    
        if ( pom1.length > 0 ) {
            greenDivs[5].classList.add('d-none')
        }
}


const calc = {
    accounting: 10,
    rental: 5,
    products:  0.5,
    orders: 0.25,
    packages: [
        {
            pName: 'Basic',
            price: 0
        }, 
        {
            pName: 'Professional',
            price: 25
        },
        {
            pName: 'Premium',
            price: 60
        },
    ],
    productsSum: 0, 
    ordersSum: 0,   
    packageSum: 0,

    total: 0,       //prodSum + ordSum
    mnozenie: function(amount, price){
        return amount * price
    },
    dodawanie: function(){

        if( checkBoxes[0].checked && checkBoxes[1].checked ) {
            this.total = this.productsSum + this.ordersSum + this.packageSum + this.accounting + this.rental
            calc.throughTotal()
            // console.log('&&')
            return
        }

        if ( checkBoxes[0].checked ){
           this.total = this.productsSum + this.ordersSum + this.packageSum + this.accounting 
           calc.throughTotal()
           return
        }
        else if ( checkBoxes[1].checked ){
            this.total = this.productsSum + this.ordersSum + this.packageSum + this.rental 
            calc.throughTotal()
            return
         }
         else{
             this.total = this.productsSum + this.ordersSum + this.packageSum
             calc.throughTotal()
         }
        
        // greenDivs[5].querySelector('.amount').textContent = `$${calc.dodawanie()}`
        // return this.productsSum + this.ordersSum + this.packageSum + this.accounting
    },
    throughTotal: function(){
        greenDivs[5].querySelector('.amount').textContent = `$${this.total}`
    }
}


