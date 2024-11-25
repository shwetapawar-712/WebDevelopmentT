# Web-Development Technology
<!DOCTYPE html>
<html lang="en">
    <head>
        <title></title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="css/style.css" rel="stylesheet">
    <style>
        body{
            height:100vh;
            background-image:url("data:image/jpeg;base64,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");
        background-size: cover;
        background-position:center ;
        background-attachment:fixed ;
    
        }
        .logo-container {
    display: flex;
    justify-content: center;
    align-items: center;
    
}

/* Optional: Style the logo image */
.logo {
    width:10%;
    height: 10%;
    border-radius:100%;
}
 
        header h1{
            text-align: center;
            font-size: 40px;
            color:aliceblue;
            flex-wrap: wrap;
        }
      nav{
        padding: 20px;
        color:white;
      }
      .link a{
        color:white;
        justify-content:center;
      }
      .greeting{
        font-family:cursive;
        color:rgb(61, 16, 16);
        text-align: center;
        font-size :30px;
        padding: 5px ; 
    
        
      }
      .container{
        display: grid;
        
         justify-content: center;
        justify-items: center;
        grid-gap:50px ;
        grid-template-columns:repeat(auto-fill,minmax(200px,1fr)) ;  

    }
    .item{
        background-color:transparent;
        border-radius: 3px;
        border: 3px brown solid;
        padding: 10%;
        grid-gap:30px;
        justify-content: center;
    }
    .input{
        color: gray;
        font-size: 20px;
        font-family: sans-serif;
        font-weight: bold;
        padding:3px}
        .main{
            color:bisque;
            font-family: cursive;
            font-size: 15px;
            
        }
        #ab{
            font-size: 50px;
            font-family: cursive;
            text-align: center;
        }
        #ac{
            font-size: 50px;
            font-family: cursive;
            text-align: center;
            
        }
        
        .special{
            color:bisque;
            font-family: cursive;
            font-size: 15px;}
            #ad{
            font-size: 50px;
            font-family: cursive;
            text-align: center;}
            #ae{
            font-size: 50px;
            font-family: cursive;
            text-align: center;}
        .point{
            color:rgb(157, 86, 157);
            font-family: cursive;
            font-size: 15px;
        }    
     /* Order Now Button Styling */
.order-btn {
    background-color: #ff4444; /* Red color */
    color: #fff;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 5px;
    margin-top: 10px;
    display: inline-block;
    transition: background-color 0.3s;
    font-weight: bold;
    text-align: center;
}

.order-btn:hover {
    background-color: #cc0000; /* Darker red on hover */
}
#home{
    text-align: center;
}
     footer a{
        text-align: center;
        color:white;
        padding: 10px;
     }
     .info{
        text-align: center;
        padding: 10px;
     }

    </style>
    </head>
    <header>
</div>
           <div class="logo-container">
        <img src="C:\Users\HP\Pictures\Screenshots\Screenshot 2024-11-18 202256.png" alt="Logo" class="logo">
    </div >

<h1>Silk & Coffee</h1>
        
    </header>
    <body>

       <div class="link"> 
        <nav>
        <a href="#">HOME</a>&nbsp;&nbsp;
       <a href="#">ABOUT US</a>&nbsp;&nbsp;  
       <a href="#">REVIEWS</a>&nbsp;&nbsp;
        <a href="#">SHOP COFFEE</a>&nbsp;&nbsp;      
      
        </nav></div>
           
    <div class="greeting">
        Welcome to  Silk and Coffee cafe'!!
    </div>
    <div class="container">
      <div class="item">
        <div class="input"><span id="ab">A</span>BOUT US </div>
     <div class="main">
        For someone who loves to relax in a cosy corner with a steaming cup of coffee
         and a novel or the ones who like to catch up with their friends over delicious snacks and 
         piping hot tea, Pune has a handful of cafes to interest you. The thriving city of Pune might
         be a great deal of academia and business to much of the world. However, the food and hospitality here 
         are in abundance. With a glorious past that stretches up to 1600 years, the city is a lively blend of the
          ancient and modern elements. The cafes in Pune are an ideal social space for the young and old alike.

     </div>   </div>
      <div class="item">
        <div class="point">
        <div class="input"><span id="ac">M</span>ENU</div>
        
            <ul type="circle">
                <li>Espresso</li>
                  <li> Americano</li>
                    <li>  Latte (options: vanilla, caramel, mocha)</li>
                        <li>Cappuccino</li>
                            <li>Flat White</li>
                                <li>Macchiato</li>
                                    <li>Mocha</li>
                                        <li>  Cold Brew</li>
                                            <li>     Iced Coffee</li>
                                            
                                                <li>   Nitro Coffee</li>
                                                    <li>   Cortado</li>
                    <li>Ristretto</li>
                
            </ul>
            <img src="data:image/jpeg;base64,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" alt="">
        </div></div>
      
      <div class="item">
        <div class="input"> <span id="ad">O</span>UR SERVICES</div>
        <div >
            We’re more than just a coffee shop – we're here to make every visit special. Here are some of the unique services we offer:

🌟 Exclusive Coffee Subscription
Love your coffee? Join our subscription program to enjoy your favorite drinks at a special monthly rate, plus exclusive perks like discounts on beans and pastries.

📲 Order Ahead & Skip the Wait
In a rush? Order and pay ahead on our app to make your coffee run even smoother. Just grab and go!

🎉 Loyalty Program – Earn While You Sip
Join our loyalty program and earn points with every purchase! Collect points to redeem for free drinks, pastries, or other treats.

☕ Coffee Tasting Events & Barista Classes
Dive deeper into the world of coffee with our events, from coffee tastings to latte art classes. Whether you're a coffee connoisseur or just curious, everyone is welcome </div>
    </div>   
      <div class="item">
        <div class="input"><span id="ae">M</span>ESSAGE!!</div>
         <div class="point">
            <p>Where every cup is crafted with care and every visit feels like home. Whether you're here for a
             quick coffee, a quiet corner to work, or a cozy chat with friends, we're glad you chose us!!.<br><br>
                Take a moment to savor the rich aromas, enjoy the warm atmosphere, and indulge in our fresh pastries and handcrafted drinks.
            <br><br>
            Thank you for making us part of your day. Here’s to good coffee, good vibes, and great company!

            From all of us at [Your Cafe Name] ☕💛"</p>
         </div>
     </div>
     </div>
     <section id="home" class="hero">
        <div class="hero-content">
            <h1>Always Welcoming You</h1>
            <p>Your cozy corner for the best coffee in town!</p>
            <a href="#menu" class="btn">Explore Our Menu</a>
            <a href="#order" class="order-btn">Order Now</a> <!-- New Order Now Button -->
        </div>
    </section>
    <div class="info">FOR  MORE INFO: <a href="">Click the Link</a></div>
     </div>
     <footer>
        <a href="#">FAQ</a>&nbsp;&nbsp;
        <a href="#">Privacy Policy</a>&nbsp;&nbsp;
        <a href="#">Terms & Conditions</a>&nbsp;&nbsp;
        <a href="#">Contact us</a>&nbsp;&nbsp;
     </footer>
    </body>
</html>
