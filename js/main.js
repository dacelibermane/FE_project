function showHideSubscription() {
  if(document.getElementById('sendOffers').checked) {
    document.getElementById('receiveOffers').style.display='block';

  }else{
    document.getElementById('receiveOffers').style.display='none';
  }
}

showHideSubscription();