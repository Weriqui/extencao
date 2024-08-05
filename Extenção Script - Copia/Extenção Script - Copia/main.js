getAccessToken()
const totalSteps = 30;
async function showStep(stepNumber) {
  for (let i = 0; i <= totalSteps; i++) {
    const el = document.getElementById('etapa-' + i);
    if (el) {
      el.classList.add('hidden');
    }
  }

  const currentEl = document.getElementById('etapa-' + stepNumber);
  if (currentEl) {
    currentEl.classList.remove('hidden');
  }
}

document.addEventListener('DOMContentLoaded', async function() {

  const etapaSelect = document.getElementById('etapa');
  const sections = {
    'PROSPECÇÃO': 'prospect',
    'NEGOCIAÇÃO': 'deal',
    'EXECUÇÃO': 'execut'
  };
  
  function handleEtapaChange() {
    // Esconder todas as seções
    for (const sectionId of Object.values(sections)) {
      const section = document.getElementById(sectionId);
      if (section) section.style.display = 'none';
    }
  
    // Obter o valor da opção selecionada
    const selectedValue = etapaSelect.value;
  
    // Mostrar a seção correspondente ao valor selecionado
    const sectionToShow = sections[selectedValue];
    if (sectionToShow) {
      document.getElementById(sectionToShow).style.display = 'grid';
    }
    if (selectedValue == 'PROSPECÇÃO'){
      showStep(10)
    } else if (selectedValue == 'NEGOCIAÇÃO') {
      showStep(15)
    } else if(selectedValue == 'EXECUÇÃO'){
      showStep(21)
    }
  }
  
  // Adiciona o event listener ao select
  etapaSelect.addEventListener('input', handleEtapaChange);

  async function fetchProductData(productNumber,etapa) {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    const isAuthenticatedExpiration = localStorage.getItem('isAuthenticatedExpiration');
  
    if (!isAuthenticated || (isAuthenticatedExpiration && Date.now() >= parseInt(isAuthenticatedExpiration))) {
      window.location.href = '/login.html';
      return;
    }
  
    function adjustBodyHeight() {
      if (document.body.clientHeight <= 300) {
        document.body.style.height = '530px';
      } else {
        document.body.style.width = '100vw';
      }
    }
  
    // Adiciona o event listener ao resize
    window.addEventListener('resize', adjustBodyHeight);
  
    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Cookie", "__cf_bm=53xTQMNzJON7e57.ajQe4QtpGRX8qhWEI294.g0i19U-1705091606-1-AXDZgBWC0wYYJTVs/2CoTc873goN1Q9Br1gyIMJtAag5Qq9YT2faO8X/lgOhW96NiV5sVrGScT4PwMpQIA8ka4M=");
  
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
  
    try {
      const response = await fetch(`https://api.pipedrive.com/v1/products/${productNumber}?api_token=6c7d502747be67acc199b483803a28a0c9b95c09`, requestOptions);
      const responseData = await response.json();
      const mapa = {
        "a07d511da0b73c3d72a16602ec78a9558e81a9c9":"link-1",
        "82e36ce9c10cdbc35c5abb4444c07d6c4cf76fbc":"link-2",
        "9837a803b7174c43a2395b91ee5707294158af6b":"MENSAGEM-5",
        "8690506c25f88098425aaea758ddd09c64b580e4":"MENSAGEM-6",
        "554b8a8154ddb6be0d5f44a4d7344b810a60a2d3":"MENSAGEM-7",
        "c66f36506126f4944cf6807c188ab4f57887dde9":"CONFIRMACAO-1",
        "b287aa7155d1330fb8da97581b2d28cc439be98e":"CONFIRMACAO-2",
        "6cb181a1c8e115feb1a2c7975dfc4b997dd416c8":"NOSHOW-ACESSOR",
        "1d1e95e5658425af8366c2947b3e8ce5ee0b7ada":"NOSHOW-GESTOR",
        "d53508074c16449cf3a6ea4ebb68d03a77400892":"SCRIPT-LIGACAO",
        "604cbf9df3eb230f04aa82d2e5787cadfc6d3b10":"email",
        "99f0ea0ce312272a8efdcd3f3716951b7d7022cc":"primerio-horario",
        "09dd3c4e12810355142b6e22e6efd859a62677c6":"OBJECAO-1",
        "e199f960da27d48a1bd8ff926bfe0bcd8c9cbf10":"OBJECAO-2",
        "5094dcb245abb330edf6421802894da5c3e7339d":"OBJECAO-3",
        "dc142b78663815776928c44432c31ad5e28b7f9d":"enviar-proposta",
        "2fc771b9c2586d42a51446bbc087699aae8c37e3":"pos-email",
        "abbdd12a56c48deaa46953a6e92d2ba593a41c69":"flw-1",
        "83f4180982947d630381a405dfde92765c3b47bc":"flw-2",
        "f446e737d0e0f7e68d794ebe4e35fdfa0ac34cce":"flw-3",
        "a3185d67f71e2c5da251a2f5c6a914f1bbf31610":"breakup-deal",
        "6171719ba916c7a7c6e930f7762f110530e836ed":"ass-contrato",
        "a25ea4deea554514d6bbfb4b175e44946f66911a":"libera-ecac",
        "964c736a3429dc50faec9719b19e5a63030d3043":"onboarding",
        "a0febfc276c1a72f201b69f50da75c6861d22c9e":"cont-fazendo",
        "3f7be568b20b98476780d1c6d7b5ebce5f9adb33":"ou-cont-fazendo",
        "af0155486e80ec4a7356053d2ac361a1ce7fe889":"obj1",
        "97de030ba50c302108b887852fdd11becddb5b2d":"obj2",
        "cdf94636b01f6c3e7e50f46b3865d574dcf25876":"obj3",
        "27afd56a345805fe556651c0488625af4892882d":"obj4",
        "5ee8b3c1112e83c450f9407422bfcf148ac38a57":"esperar",
        "372b7e196cdd26a1fbff9b97e417fe33ff057408":"T1",
        "8a02b8045ee0d293b10517a38d4f32a4c4b5cad2":"T2",
        "ac41b974083759a1d5ede6790eb6ba26971abfa2":"T3",
        "a07d511da0b73c3d72a16602ec78a9558e81a9c9":"T4",
        "82e36ce9c10cdbc35c5abb4444c07d6c4cf76fbc":"T5",
        "fa6ac23848b195ad0c737e935c30dfc522b0506e":"T6",
        "ce8c89605ede6e4c71a04933032598eb7007e217":"T7",
        "9837a803b7174c43a2395b91ee5707294158af6b":"F1",
        "8690506c25f88098425aaea758ddd09c64b580e4":"F2",
        "554b8a8154ddb6be0d5f44a4d7344b810a60a2d3":"F3",
        "de7cc46b66dc46cbbcdd9caf01c316ae2aa5c9cb":"F4",
        "c66f36506126f4944cf6807c188ab4f57887dde9":"F5",
        "b287aa7155d1330fb8da97581b2d28cc439be98e":"F6",
        "99f0ea0ce312272a8efdcd3f3716951b7d7022cc":"F7",
        "6cb181a1c8e115feb1a2c7975dfc4b997dd416c8":"F8",
        "1d1e95e5658425af8366c2947b3e8ce5ee0b7ada":"F9",
        "604cbf9df3eb230f04aa82d2e5787cadfc6d3b10":"F10",
        "abbdd12a56c48deaa46953a6e92d2ba593a41c69":"F11",
        "1370a59adbfe110e85fb14f20856796bcf806d1d":"C1",
        "8a426b7141d9548b64756db71f436da654d47df4":"C2",
        "12ceb06194e3480ada0de275cb469fce07bf2cfa":"C3",
        "764dfb3b15eb71bf9a06933ced900ce57fec631c":"NS1",
        "f3e87e133355ab14255256223ca644cc92e3629a":"NS2",
        "125982abd7313245c79e0773a8fa6a5ef8effe03":"NS3",
        "066815510a36b55c73d725e501f40a3325abdc59":"NS4",
        "0f63ca9c37c3964bb83de247733b7fba0447e9fd":"NS5",
      };

      const limpar = Object.values(mapa);
      for (let i = 0; i < limpar.length; i++) {
        const element = document.getElementById(limpar[i]);
        if(element){
          element.innerHTML = ''
        }
      }
      Object.entries(mapa).forEach(([key, value]) => {
        const scriptText = responseData.data[key];
        if (scriptText) {
          const formattedText = scriptText.replace(/\n\n/g, '\n').replace(/\n/g, '<br><br>').replace(/XXXXXXXXXX/g,'<strong>XXXXXXXXXX</strong>').replace(/XXXXXXXXX/g,'<strong>XXXXXXXXX</strong>').replace(/XXXXXXXX/g,'<strong>XXXXXXXX</strong>').replace(/XXXXXXX/g,'<strong>XXXXXXX</strong>').replace(/XXXXXX/g,'<strong>XXXXXX</strong>').replace(/XXXXX/g,'<strong>XXXXX</strong>').replace(/XXXX/g,'<strong>XXXX</strong>').replace(/XXX/g,'<strong>XXX</strong>');
          const element = document.getElementById(value);
          if (element) {
            element.innerHTML = formattedText;
          }
        }
      });

      for (let i = 1; i <= totalSteps; i++) {
        const stepEl = document.getElementById('step' + i);
        if (stepEl) {
          stepEl.addEventListener('click', () => showStep(i));
        }
      }

      showStep(etapa);
    
    } catch (error) {
      console.log('error', error);
    }
  }
  fetchProductData(document.querySelector('#produto').value,10)
  document.querySelector('#produto').addEventListener('input', function(){
    fetchProductData(document.querySelector('#produto').value, parseInt(document.querySelectorAll('.step-content:not(.hidden)')[0].id.split('-')[1]))
  })
  handleEtapaChange();
});

document.addEventListener('DOMContentLoaded', function() {
  const redParagraphs = document.querySelectorAll('p.red');

  redParagraphs.forEach(p => {
    p.addEventListener('click', function() {
      // Criar elemento de confirmação se não existir
      let confirmation = p.querySelector('.copy-confirmation');
      if (!confirmation) {
        confirmation = document.createElement('span');
        confirmation.classList.add('copy-confirmation');
        confirmation.textContent = 'Copiado!';
        p.appendChild(confirmation);
      }

      // Copiar texto, excluindo o elemento de confirmação
      let textToCopy = p.innerHTML
        .replace(/<br>/g, '\n') // Substitui <br> por \n
        .replace(/<[^>]*>/g, '') // Remove outras tags HTML
        .replace('Copiado!', '') // Remove a palavra 'Copiado'
        .replace(/<strong>/g, '') // Remove a tag de abertura <strong>
        .replace(/<\/strong>/g, ''); // Remove a tag de fechamento </strong>
      navigator.clipboard.writeText(textToCopy)
        .then(() => {
          // Mostrar confirmação
          confirmation.classList.add('show-confirmation');
          // Ocultar após a animação
          setTimeout(() => {
            confirmation.classList.remove('show-confirmation');
          }, 2000);
        })
        .catch(err => {
          console.error('Erro ao copiar texto:', err);
        });
    });
  });

  /*document.querySelector('#sidebar').addEventListener('mouseover', function() {
    document.querySelector('p.link').style.width = '250px';
  });
  
  document.querySelector('#sidebar').addEventListener('mouseout', function() {
    document.querySelector('p.link').style.width = 'auto'; // ou qualquer outro valor padrão
  });*/
  
});










function createTableFromJson(jsonData) {
  var tableBody = document.getElementById('table-body');
  tableBody.innerHTML = ''; // Limpa o conteúdo existente
  const chavesSelecionadas = ["MES", "NUMERO PARCELAMENTO", "TIPO", "MODALIDADE", "NUMERO PARCELAS", "VALOR PARCELAD", "VALOR PRINCIPAL", "REDUCAO", "PRODUTO"];

  jsonData.forEach(function (item) {
      const novoObjeto = {};

      chavesSelecionadas.forEach(chave => {
          novoObjeto[chave] = item[chave];
      });

      var row = document.createElement('tr'); // Cria a linha da tabela

      // Itera sobre os valores do objeto JSON para cada célula
      for (var key in novoObjeto) {
          if (key !== '_id') { // Ignora a chave '_id'
              var cell = document.createElement('td');
              cell.setAttribute('data-label', key.toUpperCase());
              cell.textContent = novoObjeto[key];
              row.appendChild(cell); // Adiciona a célula na linha
          }
      }

      tableBody.appendChild(row); // Adiciona a linha no corpo da tabela
  });
}


// Função para obter o token de acesso
function getAccessToken(forceRenew = false) {
  const loginUrl = 'https://realm.mongodb.com/api/client/v2.0/app/data-jqjrc/auth/providers/local-userpass/login';
  const credentials = {
      username: "weriquetiao@gmail.com",
      password: "admin123"
  };

  // Verifica se já temos um token armazenado e não estamos forçando a renovação
  if (!forceRenew && localStorage.getItem('accessToken')) {
      return Promise.resolve(localStorage.getItem('accessToken'));
  }

  // Obtem um novo token
  return fetch(loginUrl, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
  })
  .then(response => response.json())
  .then(data => {
      // Armazena o novo token
      localStorage.setItem('accessToken', data.access_token);
      return data.access_token;
  })
  .catch(error => {
      console.error('Falha ao obter o token de acesso', error);
      throw error;  // Re-throw the error to be handled by the caller
  });
}

function find(consulta) {
  const findOneUrl = 'https://sa-east-1.aws.data.mongodb-api.com/app/data-jqjrc/endpoint/data/v1/action/find';
  const requestData = {
      "collection": "colecao-parcelamentos",
      "database": "base-parcelamentos",
      "dataSource": "password",
      "filter": {
          'CPF': consulta
      }
  };

  function attemptFind(accessToken) {
      return fetch(findOneUrl, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${accessToken}`
          },
          body: JSON.stringify(requestData)
      });
  }

  function handleResponse(response) {
      if (!response.ok) {
          if (response.status === 401 || response.status === 403) {
              // Token might be invalid or expired, try refreshing it
              return getAccessToken(true).then(attemptFind);
          } else {
              // Some other error, rethrow it to be handled by the final catch
              throw new Error(`HTTP error! status: ${response.status}`);
          }
      } else {
          return response.json();
      }
  }

  getAccessToken()
      .then(attemptFind)
      .then(handleResponse)
      .then(data => {
          createTableFromJson(data.documents)
          if(data.documents.length == 0){
            document.querySelector("#par").style.display = 'none'
          } else{
            document.querySelector("#par").style.display = 'block'
          }
      })
      .catch(error => {
          console.error('Failed to find', error);
      });
}



document.querySelector("#consulta").addEventListener('click',function(){
  if(document.querySelector("#pesquisa").value.length <=14) {
    find(formatarCPF(document.querySelector("#pesquisa").value))
  } else{
    find(document.querySelector("#pesquisa").value)
  }
})


function formatarCPF(cpf) {
  let cpfLimpo;
  if(cpf.slice(0,3) === "XXX"){
      return cpf
  } else{
      // Adiciona os Xs à frente do CPF
      cpfLimpo = cpf.replace(/\D/g, '')
      const cpfFormatado = 'XXX.' + cpfLimpo.slice(3, 6)+'.'+cpfLimpo.slice(6, 9) + '-XX';
      console.log(cpfFormatado)
      return cpfFormatado;
  }


}



function copyPageContent() {
  let confirmation = document.querySelector('#card').querySelector('.copy-confirmation');
  if (!confirmation) { 
    confirmation = document.createElement('span'); 
    confirmation.classList.add('copy-confirmation'); 
    confirmation.textContent = 'Copiado!'; 
    document.querySelector('#card').appendChild(confirmation); 
  } 
  window.getSelection().selectAllChildren(document.querySelector('#card')); // Seleciona todo o texto
  
  try {
    // Tente executar o comando de cópia
    const success = document.execCommand('copy');
    if (success) {
      // Mostrar confirmação 
      confirmation.classList.add('show-confirmation'); 
      // Ocultar após a animação 
      setTimeout(() => { 
        confirmation.classList.remove('show-confirmation'); 
      }, 2000); 
    } else {
      // Se o comando de cópia não tiver sucesso
      console.error('Erro ao copiar texto');
    }
  } catch (err) {
    console.error('Erro ao copiar texto:', err);
  }
}

function filtrar_transferir_negocio(dado){ 
  return {
    "id":dado.data[0].id,
    "nome":dado.data[0].person_id.name,
    "telefone":dado.data[0].person_id.phone[0].value,
    "empresa":dado.data[0].org_id.name
  }
}


document.querySelector("#par").addEventListener('click',function(){
  copyPageContent()
})




function arquiva(id){

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Cookie", "__cf_bm=9D7B6wsTsF9i7H6eeqmlwn8R7KX_A0hnLLxLXmasbQM-1707154920-1-AXCnDecJ3lY+x+6cPjocy9k3gX2+4mdYH/UVv+/FYcZSaD4nIOdkhZhisTbegUhKrsioZEQa1gMNGX32znv8HaY=");
    
    let raw = JSON.stringify({
      "is_archived": true
    });
    
    let requestOptions = {
      method: 'PATCH',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch(`https://api.pipedrive.com/v1/leads/${id}?api_token=6c7d502747be67acc199b483803a28a0c9b95c09`, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
}

async function pesquisar_leads(id){
    let myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Cookie", "__cf_bm=uZLXsan3EYIr0jXLITKQvw2diO7swzKAuu11ClJqL8Y-1707158030-1-ATQv7mQdA2TBU1bCrsLXh8Ggq/xnMpFiZ0nG3sCLUIe8wMEZvP/mUo25grW940UiyOM3V2gwLdB2QaFEKJ1wWag=");

    let requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };
    const response = await fetch(`https://api.pipedrive.com/v1/leads/${id}?api_token=6c7d502747be67acc199b483803a28a0c9b95c09`, requestOptions)
    const result = await response.json()
    const data = await result.data
    return data
}



async function criarNegocio(id,user_id){
  const dados_lead = await pesquisar_leads(id)
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Accept", "application/json");
  myHeaders.append("Cookie", "__cf_bm=MapXknZ_t2DbDBgS8GDRVv3YcBaOwVyQrzjWVpVg9qU-1707161535-1-AdfywwTRx5Tm3Gb5oP3GJB4GTtYGoiCaZX5gGgN5jZ/toAk9Q6tq2pE5N6BtUokl7mw/2YtJuoMXMW21VxsxNTI=");
  
  let raw =  JSON.stringify({
    "title": dados_lead["title"],
    "value": null,
    "expected_close_date": null,
    "user_id":user_id,
    "person_id": dados_lead["person_id"],
    "org_id": dados_lead["organization_id"],
    "next_activity_id": null,
    "5fca6336de210f847b78ce5fd7de950530e26e94":dados_lead["5fca6336de210f847b78ce5fd7de950530e26e94"],
    "2d242d06151f4dab1bbebe3a6a1de1aa1ccee6cb":dados_lead["2d242d06151f4dab1bbebe3a6a1de1aa1ccee6cb"],
    "2d242d06151f4dab1bbebe3a6a1de1aa1ccee6cb_currency":dados_lead["2d242d06151f4dab1bbebe3a6a1de1aa1ccee6cb_currency"],
    "b79ea16ef66d21e71ab57e75398fc4413228cbbf":dados_lead["b79ea16ef66d21e71ab57e75398fc4413228cbbf"],
    "b79ea16ef66d21e71ab57e75398fc4413228cbbf_currency":dados_lead["b79ea16ef66d21e71ab57e75398fc4413228cbbf_currency"],
    "829d91cab91f6709555655e9e9a6289090407f0d":dados_lead["829d91cab91f6709555655e9e9a6289090407f0d"],
    "829d91cab91f6709555655e9e9a6289090407f0d_currency":dados_lead["829d91cab91f6709555655e9e9a6289090407f0d_currency"],
    "7f58a030551b0e72f14542f150980a167b77444a":dados_lead["7f58a030551b0e72f14542f150980a167b77444a"],
    "9774abceca413e202f5ae99db37af307340304cc":dados_lead["9774abceca413e202f5ae99db37af307340304cc"],
    "f9e21bf8524892128a27d0c7886a85edba97105c":dados_lead["f9e21bf8524892128a27d0c7886a85edba97105c"],
    "8f63351fb6d95b21438dfaf19c09995acabc2f09":dados_lead["8f63351fb6d95b21438dfaf19c09995acabc2f09"],
    "9a5d202668a2e507335baa51573d5b4c4f97ea64":dados_lead["9a5d202668a2e507335baa51573d5b4c4f97ea64"],
    "385630236c989d17c56ec59732b78d23b1f9b56a":dados_lead["385630236c989d17c56ec59732b78d23b1f9b56a"],
    "69b8e808073d8d63787d90385449dc48b00bc10d":user_id,
    "label": "165",
    "visible_to": "1",
    "status": "open",
    "active": true,
    "stage_id": 2
  });
  
  let requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
  const response = await fetch("https://api.pipedrive.com/v1/deals?api_token=6c7d502747be67acc199b483803a28a0c9b95c09", requestOptions)
  return response.status
}




async function buscar_e_arquivar_leads(org_name){
  let myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");
  myHeaders.append("Cookie", "__cf_bm=Jzh.42LRkMoQM.UUiIz35SNzbsslT9TBa0ZjuLd0zpc-1707230494-1-AVQzdKUtG3qQutE7enNfWRMTHlahBRHnoPz+38ESTqXrrGWmnf8UL2GnktVhG32tYVXrrqmqExI10y2UflZ7IJg=");
  
  let requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  
  const response = await fetch(`https://api.pipedrive.com/v1/leads/search?term=${org_name}&exact_match=1&api_token=6c7d502747be67acc199b483803a28a0c9b95c09`, requestOptions)
  const result = await response.json()
  console.log(result)
  const bl = await envia_python(result)
  console.log(bl)
  for (let i = 0; i < result.data.items.length; i++) {
    id = result.data.items[i].item.id
    arquiva(id)
  }
  return response.status

}

async function deletar_lead(id){
  let myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");
  
  let requestOptions = {
    method: 'DELETE',
    headers: myHeaders,
    redirect: 'follow'
  };
  
  const reponse = await fetch(`https://api.pipedrive.com/v1/leads/${id}?api_token=6c7d502747be67acc199b483803a28a0c9b95c09`, requestOptions)
  return reponse.status
}

async function converter_lead_em_negocio(){
  const modal = document.querySelector('dialog')
  modal.innerHTML = '<img src="https://usagif.com/wp-content/uploads/loading-63.gif" alt="">'
  modal.style.backgroundColor = 'transparent'
  modal.style.border = 'none'
  modal.showModal()
  document.querySelector('.conteudo').style.opacity = '30%'
  const id_lead = document.querySelector("#nome_da_pessoa").idpipe
  const titulo = document.querySelector("#empresa_da_pessoa").innerText
  const user_id = document.querySelector("#Agente").value
  const negocio_criado = await criarNegocio(id_lead,user_id)
  if (negocio_criado <= 299){
    const deletar_o_lead = await deletar_lead(id_lead)
    if (deletar_o_lead <= 299){
      const arquivar_leads = await buscar_e_arquivar_leads(titulo)
      if(arquivar_leads <= 299){
        modal.style.backgroundColor = 'white'
        modal.style.border = 'black 1px solid'
        modal.innerHTML = '<h1>Negócio Criado Com Sucesso</h1> <button>OK</button>'
        const buttonClose = document.querySelector("dialog button")
        buttonClose.onclick = function () {
          modal.close()
          modal.innerHTML = ''
          document.querySelector('.conteudo').style.opacity = '100%'
        }
      }else{
        alert("Erro ao arquivar os Leads")
      }
    }else{
      alert("Erro ao deletar o Lead")
    }
  }else{
    alert("Erro ao criar o negócio")
  }

}

async function buscar_o_lead(org_name,id_pessoa){
  let myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");
  myHeaders.append("Cookie", "__cf_bm=Jzh.42LRkMoQM.UUiIz35SNzbsslT9TBa0ZjuLd0zpc-1707230494-1-AVQzdKUtG3qQutE7enNfWRMTHlahBRHnoPz+38ESTqXrrGWmnf8UL2GnktVhG32tYVXrrqmqExI10y2UflZ7IJg=");
  
  let requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  
  const response = await fetch(`https://api.pipedrive.com/v1/leads/search?term=${org_name}&person_id=${id_pessoa}&api_token=6c7d502747be67acc199b483803a28a0c9b95c09`, requestOptions)
  const result = await response.json()
  if (result.data.items.length ==0){
    return 0
  } else{
    const saida = result.data.items[0].item.id
    return saida
  }
  

}

async function pesquisaTelefone(telefone) {
  let apiToken = "6c7d502747be67acc199b483803a28a0c9b95c09"
  const myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");
  myHeaders.append("Cookie", "__cf_bm=IR_fPRYXr0vB5pkysQR89pQAbg1nMYSvlSmha.IrvqM-1706648269-1-Afmo0+QrwNJkKacoFi92A2Xguux19IkP4gNVm/N9PD3aGyRIGh35VIBNLEkcOMYIjZSJ3JgaTDrAzUbQuM2fwzI=");  
  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };  
  try {
    const response = await fetch(`https://api.pipedrive.com/v1/persons/search?term=${telefone}&start=0&limit=1&api_token=${apiToken}`, requestOptions);
    const result = await response.json();
    if (result.data.items.length == 0){
      const modal = document.querySelector('dialog')
      modal.innerHTML = '<h1>Nenhum Lead encontrado com o telefone informado</h1> <button>OK</button>'
      modal.showModal()
      const buttonClose = document.querySelector("dialog button")
      buttonClose.onclick = function () {
        modal.close()
        modal.innerHTML = ''
      }
    } else {
      const id_lead = await buscar_o_lead(result.data.items[0].item.organization.name,result.data.items[0].item.id,)
      if (id_lead==0){
        const modal = document.querySelector('dialog')
        modal.innerHTML = '<h1>Nenhum Lead encontrado com o telefone informado</h1> <button>OK</button>'
        modal.showModal()
        const buttonClose = document.querySelector("dialog button")
        buttonClose.onclick = function () {
          modal.close()
          modal.innerHTML = ''
        }
      }else{
        const saida = {
          "org_name":result.data.items[0].item.organization.name,
          "nome_pessoa":result.data.items[0].item.name,
          "telefone":result.data.items[0].item.phones[0],
          "id_lead":id_lead
        }
        document.querySelector("#nome_da_pessoa").innerText = saida.nome_pessoa
        document.querySelector("#nome_da_pessoa").idpipe = saida.id_lead
        document.querySelector("#telefone_da_pessoa").innerText = saida.telefone
        document.querySelector("#empresa_da_pessoa").innerText = saida.org_name
        document.querySelector('#dados-deal').style.display = 'block'
        return console.log(saida)
      }
    }
  } catch (error) {
    console.log('error', error); 
  }
}


async function numeros_para_bloqueio(data){
  let lista_numeros = []
  for (let index = 0; index < data.data.items.length; index++) {
      console.log(data.data)
      if (data.data.items[index].item.person){
        const element = data.data.items[index].item.person.id;
        const telefone = await pesquisa_telefone(element)
        lista_numeros.push({"phone_number":formatarTelefone(telefone),"event":"bloqueado"})
      }
  }
  return lista_numeros
}

async function pesquisa_telefone(id){
  let myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");
  myHeaders.append("Cookie", "__cf_bm=7Trl_n7W5SA5HizzEeSjkff3IRx5QASuILMwZlfDhbg-1707309088-1-AUI6k17jqKV+KNHHoix02+h2Sk6xzH7/CC1lDF7XEnraIZ80L5nJFQxtTJzXL8qnTyO3LoVSHv6NNGlnah+An1Q=");
  
  let requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  
  const response = await fetch(`https://api.pipedrive.com/v1/persons/${id}?api_token=6c7d502747be67acc199b483803a28a0c9b95c09`, requestOptions)
  const saida = await response.json()
  return saida.data.phone[0].value
}



  






async function envia_python(lista){
  // Dicionário de exemplo
  const exemplo = await numeros_para_bloqueio(lista)
  
  // Configurações da solicitação
  const requestOptions = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(exemplo) 
  };
  
  // Enviar solicitação para o servidor Flask
  fetch("https://calix-5d642828daaa.herokuapp.com/altera", requestOptions)
      .then(response => {
          if (!response.ok) {
              throw new Error('Erro ao enviar solicitação');
          }
          return response.json(); // Se o servidor responder com JSON
      })
      .then(data => {
          console.log('Resposta do servidor:', data); // Tratar a resposta do servidor
      })
      .catch(error => {
          console.error('Erro:', error);
      });

}




function formatarTelefone(numero) {
  // Remover quaisquer caracteres não numéricos
  let numeroLimpo = numero.replace(/[^0-9]/g, '');

  // Verificar se o número inclui o código do país do Brasil (55) e removê-lo
  if (numeroLimpo.length > 11 && numeroLimpo.startsWith('55')) {
      numeroLimpo = numeroLimpo.substring(2);
  }

  // Verificar se o número tem 10 dígitos (sem o nono dígito) e adicionar o nono dígito
  if (numeroLimpo.length === 10) {
      numeroLimpo = numeroLimpo.substring(0, 2) + '9' + numeroLimpo.substring(2);
  }

  // Verificar se o número tem 11 dígitos (com o nono dígito) e formatar
  if (numeroLimpo.length === 11) {
      return '(' + numeroLimpo.substring(0, 2) + ') ' + numeroLimpo.substring(2, 7) + '-' + numeroLimpo.substring(7);
  }
}


document.addEventListener("DOMContentLoaded", function () {

  document.querySelector("#consulta_telefone").addEventListener('click', function(){
    let numero = document.querySelector("#pesquisa_telefone").value
    pesquisaTelefone(numero)
    if (document.querySelector("#Agente").value = ''){
      const modal = document.querySelector('dialog')
      modal.innerHTML = '<h1>Selecione o Assessor</h1> <button>OK</button>'
      const buttonClose = document.querySelector("dialog button")
      buttonClose.onclick = function () {
        modal.close()
        modal.innerHTML = ''
      }
      modal.showModal()
    }
    document.querySelector("#transfere_negocio").addEventListener('click',converter_lead_em_negocio);
  });
  
})


