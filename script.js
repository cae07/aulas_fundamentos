joaozinho.getUp();
joaozinho.walk();
joaozinho.openTheDoor();
const adress = getAdress();

joaozinho.goToMarket(adress);

if (milk.length >= 1) {
  joaozinho.getMilk(1);
}

if (eggs.length >= 6) {
  joaozinho.getEggs(6);
}
