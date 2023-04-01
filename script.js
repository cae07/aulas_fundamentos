joaozinho.getUp();
joaozinho.walk();
const adress = getAdress();
joaozinho.openTheDoor();

joaozinho.goToMarket(adress);

if (milk.length >= 1) {
  joaozinho.getMilk(1);
}

if (eggs.length >= 6) {
  joaozinho.getEggs(6);
}
