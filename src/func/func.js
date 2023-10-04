
import React, { useEffect, useState } from "react";

export function inicializarScript(href) {
  const inaugurate =
  "Thu Oct 16 2023 19:59:59 GMT-0300 (Horário Padrão de Brasília)";
  localStorage.setItem("inaugurationDate", inaugurate);
  
  // Função para exibir o texto com efeito de escrita
  /*     function showTextWithTypingEffect() {
    const textContainer = document.getElementById('text-container');
    let index = 0;

    function type() {
      if (index < text.length) {
        textContainer.textContent += text.charAt(index);
        index++;
        setTimeout(type, 10); // Ajuste o valor do timeout para controlar a velocidade do efeito de escrita
      }
    }

    type();
  } */

  // Chama a função para exibir o texto com efeito de escrita
  /*     showTextWithTypingEffect();
   */
  // Define a data de inauguração do e-commerce (20 dias a partir da data atual)
  let inaugurationDate = new Date();
  const storedInaugurationDate = localStorage.getItem("inaugurationDate");

  if (storedInaugurationDate) {
    inaugurationDate = new Date(storedInaugurationDate);
  } else {
    inaugurationDate = new Date(storedInaugurationDate);
    localStorage.setItem("inaugurationDate", inaugurate);
  }
 
    function updateCountdown() {
      const now = new Date();
      const timeLeft = inaugurationDate - now;

      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
      const daysElement = document.getElementById('days');

      if(daysElement) {
        if(href.pathname === '/') {
        document.getElementById("days").textContent = formatTime(days);
        document.getElementById("hours").textContent = formatTime(hours);
        document.getElementById("minutes").textContent = formatTime(minutes);
        document.getElementById("seconds").textContent = formatTime(seconds);
        }

      }
    }
  

  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }

  setInterval(updateCountdown, 1000);
}
