var tela = 0
var largura = 400 //largura botões tela inícial
var largura1 = 100 //largura botão creditos
var largura2 = 100 //largura botão voltar
var largurapeca = 160
var altura = 70 //altura botões tela inícial
var alturapeca = 200
var xpeca = 25
var xMenu = 295 //posição x botões tela inicial
var xMenu1 = 45 //posição x botão créditos
var xvoltar = 580 //posição x botão voltar
var ypeca = 130
var yMenu1 = 340 //posição y botão jogar
var yMenu2 = 430 //posição y botão como jogar
var yMenu3 = 380 //posição y botão informações
var yFase1 = 352
var yFase2=306
var yFase22=491
var yFase3=277
var larguraF3=364
var alturaF3=332
var larguraF1=234
var larguraF2=732
var alturaF1=161
var audio;
var fase1;
var fase2;
var fase3;
var bg;
var erro;
var acerto;
var click;
var pergunta1;
var pergunta2;
var pergunta3;
var tempo=0
var cont=0
var tl=0
var temp=0
var comojogar;
let vid;
var faz=0
var teste=0
var telaAnt;

function preload(){
   bg= loadImage('bg.png')
  fase1=loadImage('fase1.png')
  fase2=loadImage('fase2.png')
  fase3=loadImage('fase3.png')
  audio=loadSound('audio.mp3')
  acerto=loadSound('acerto.mp3')
  erro=loadSound('erro.mp3')
  click=loadSound('click.mp3')
  pergunta1=loadSound('pergunta1.mp3')
  pergunta2=loadSound('pergunta2.mp3')
  pergunta3=loadSound('pergunta3.mp3')
  comojogarbg=loadImage('como-jogar-bg.png')
  resposta=loadImage('RESPOSTA ERRADA.png')
  telafinal=loadImage('tela-final.png')
  cm=loadSound('comojogar.mp3')
  final=loadSound('parabens.mp3')
}

function setup() {
  createCanvas(990,740);
    audio.play()
}
function telaMenu() {
  background(208,208,208);
  image(bg,0,0)
    textAlign(CENTER)
    textSize(50)
    
    //jogar
    if ( mouseX > xMenu && mouseX <xMenu+largura && mouseY> yMenu1 && mouseY< yMenu1 + altura){
        noFill()
        stroke(255,255,255)
        strokeWeight(4)
        rect(xMenu, yMenu1, largura, altura, 30);
      
    }
    noStroke()
    fill(255,255,255)
    text("Jogar",495,yMenu1+48)
        
    if ( mouseX > xMenu && mouseX <xMenu+largura && mouseY> yMenu2 && mouseY< yMenu2 + altura){
        noFill()
        stroke(255,255,255)
        strokeWeight(4)
        rect(xMenu, yMenu2, largura, altura,30);
      
    }
    noStroke()
    fill(255,255,255)
    text("Como jogar",495,yMenu2+48)
  
}

function telaDoJogoFase1(){
  image(fase1,0,0)
  if ( mouseX > 120 && mouseX <120+larguraF1 && mouseY> yFase1 && mouseY< yFase1 + alturaF1){
        noFill()
        stroke(0,0,0)
        strokeWeight(4)
        rect(120, yFase1, larguraF1, alturaF1, 50);
      
    }
  if ( mouseX > 379 && mouseX <379+larguraF1 && mouseY> yFase1 && mouseY< yFase1 + alturaF1){
        noFill()
        stroke(0,0,0)
        strokeWeight(4)
        rect(379, yFase1, larguraF1, alturaF1, 50);
      
    }
   if ( mouseX > 638 && mouseX <638+larguraF1 && mouseY> yFase1 && mouseY< yFase1 + alturaF1){
        noFill()
        stroke(0,0,0)
        strokeWeight(4)
        rect(638, yFase1, larguraF1, alturaF1, 50);
      
  }
}

function telaDoJogoFase2(){
  image(fase2,0,0)
   if ( mouseX > 129 && mouseX <129+larguraF2 && mouseY> yFase2 && mouseY< yFase2 + alturaF1){
        noFill()
        stroke(0,0,0)
        strokeWeight(4)
        rect(129, yFase2, larguraF2, alturaF1, 50);
      
    }
   if ( mouseX > 129 && mouseX <129+larguraF2 && mouseY> yFase22 && mouseY< yFase22 + alturaF1){
        noFill()
        stroke(0,0,0)
        strokeWeight(4)
        rect(129, yFase22, larguraF2, alturaF1, 50);
      
    }
}

function telaDoJogoFase3(){
  image(fase3,0,0)
  if(mouseX > 117 && mouseX <117+larguraF3 && mouseY> yFase3 && mouseY< yFase3 + alturaF3){
    noFill()
        stroke(0,0,0)
        strokeWeight(4)
        rect(117, yFase3, larguraF3, alturaF3, 50);
    
  }
  if(mouseX > 501 && mouseX <501+larguraF3 && mouseY> yFase3 && mouseY< yFase3 + alturaF3){
    noFill()
        stroke(0,0,0)
        strokeWeight(4)
        rect(501, yFase3, larguraF3, alturaF3, 50);
    
  }
  
}
function Erro(){
  image(resposta,248,300)
     if(mouseX > 250 && mouseX <250+490 && mouseY> 390 && mouseY< 390 + 113){
       noFill()
        stroke(0,0,0)
        strokeWeight(0)
        rect(250, 390, 490, 113, 60);
     }
}

function draw() {
  background(220);
    tempo=tempo+1
  
  if(tempo==60){
    audio.pause()
  }
  if(tempo>=61){
    audio.play()
    tempo=0
  }
  // console.log(tempo)
   //tela menu
  if(tela==0){
    telaMenu()
  }

  //tela jogo em ação
  
  if(tela==1){
    telaDoJogoFase1()
    cont=cont+1
    if(cont==50){
      pergunta1.play()
    }
    if(cont==600){
      pergunta1.play()
      cont=-800
    }
    //console.log(cont)
    
    

  }
  
  // tela como jogar
  if(tela==2){
  image(comojogarbg,0,0)
  if(mouseX>700 && mouseX<700+100 && mouseY>50 &&mouseY<50+30){
    fill(255,255,255)
    rect(700, 50, 100, 40, 60);
  }
     noStroke()
    fill(0,0,0)
    textSize(30)
    text("voltar",750,78)
    faz=faz+1
    if(faz==10){
      cm.play()
      faz=-2500
    }
  }
  
   // tela informações 
  if(tela==3){
    
   
  }
  
  //créditos
  if(tela==4){
   telaDoJogoFase2()
    tl=tl+1
    if(tl==50){
      pergunta2.play()
    }
    if(tl==600){
      pergunta2.play()
      tl=-800
    }
   // console.log(tl)
    
    
  }
  if(tela==5){
    telaDoJogoFase3()
    temp=temp+1
    if(temp==40){
      pergunta3.play()
    }
    if(temp==400){
      pergunta3.play()
      temp=-600
    }
   // console.log(temp)
    
  }
  if(tela==6){
    background(200)
    image(resposta,248,300)
     if(mouseX > 250 && mouseX <250+490 && mouseY> 390 && mouseY< 390 + 113){
       noFill()
        stroke(0,0,0)
        strokeWeight(0)
        rect(250, 390, 490, 113, 60);
     }
  }
  if(tela==7){
    image(telafinal,0,0)
    teste=teste+1
    if(teste==50){
      final.play()
      teste=-2000
    }
    
  }
}
function mouseClicked() {
  click.play()
  if(tela==0){ 
    if ( mouseX > xMenu && mouseX <xMenu+largura && mouseY> yMenu1 && mouseY< yMenu1 + altura){
      //botão jogar
          tela=1
    }
    else{
      if(mouseX > xMenu && mouseX < xMenu+largura && mouseY> yMenu2 && mouseY<yMenu2 + altura){
        //botão como jogar
        tela=2
      }
    }      
   }
  else{
  if(tela==1){
    //telaAnt=tela
    if(mouseX > 120 && mouseX <120+larguraF1 && mouseY> yFase1 && mouseY< yFase1 + alturaF1){
      acerto.play()
            tela=4
    }
    else{
      if ( mouseX > 379 && mouseX <379+larguraF1 && mouseY> yFase1 && mouseY< yFase1 + alturaF1){
        erro.play()
            tela=6
      }
      else{
        if ( mouseX > 638 && mouseX <638+larguraF1 && mouseY> yFase1 && mouseY< yFase1 + alturaF1){
          erro.play()
                      tela=6
        }
        }
      }
     
    }
  else{
    if(tela==4){
      if ( mouseX > 129 && mouseX <129+larguraF2 && mouseY> yFase2 && mouseY< yFase2 + alturaF1){
      acerto.play()
      //telaAnt=tela
      tela=5
      
      }
    else{
      if ( mouseX > 129 && mouseX <129+larguraF2 && mouseY> yFase22 && mouseY< yFase22 + alturaF1){
        erro.play()
        tela=6
      }
    }
    
  }
    else{
      if(tela==5){
       if(mouseX > 501 && mouseX <501+larguraF3 && mouseY> yFase3 && mouseY< yFase3 + alturaF3){
          acerto.play()
          tela=7
       }
      else{
        if(mouseX > 117 && mouseX <117+larguraF3 && mouseY> yFase3 && mouseY< yFase3 + alturaF3){
          erro.play()
           tela=6
         }
      
        }
      }
      
    }
    
  }
}
if(tela==6){
    if(mouseX > 250 && mouseX <250+490 && mouseY> 390 && mouseY< 390 + 113){
          tela=1
      }
  }
if(tela==7){
    if(mouseX > 247 && mouseX <247+497 && mouseY> 524 && mouseY< 524 + 109){
          tela=0
      }
  }
else{
    if(mouseX>700 && mouseX<700+100 && mouseY>50 &&mouseY<50+30){
       tela=0
       }
  }

}