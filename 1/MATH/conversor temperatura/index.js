function conversor(celsius, fh, kelvin) {
  let celsiusParaKelvin = Math.round(celsius + 273.15);
  let celsiusParaFh = Math.round((celsius * 9) / 5 + 32);
  let kelvinParaCelsius = Math.round(kelvin - 273.15);
  let fhParaCelsius = Math.round(((fh - 32) * 5) / 9);
  let fhParaKelvin = Math.round(((fh - 32) * 5) / 9 + 273.15);
  let kelvinParaFh = Math.round(((kelvin - 273.15) * 9) / 5 + 32);
  console.log(
    celsius +
      " Celsius Para Kelvin : " +
      celsiusParaKelvin +
      " Para fh : " +
      celsiusParaFh
  );
  console.log(
    fh +
      " Fh  Para kelvin : " +
      fhParaKelvin +
      " Para Celsius : " +
      fhParaCelsius
  );
  console.log(
    kelvin +
      " kelvin  Para fh : " +
      kelvinParaFh +
      "Para Celsius : " +
      kelvinParaCelsius
  );
}
conversor(50, 50, 50);
