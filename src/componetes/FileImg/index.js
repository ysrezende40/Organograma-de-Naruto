import './FileImg.css';

const FileImg = (props) => {

  const CriarUrl = (e) => {
    const file = e.target.files[0]; //ele pega o envento de enviar a imagem e o arquivo e armazena em file
    //files[0] pega o primeira imagem que o usario inseriu
    
    if (file) {
      const reader = new FileReader(); //aqui ele instancia a função que faz leitura
      reader.readAsDataURL(file);//aqui ele le o arquivo de file e trasforma em url
      
        reader.onload = (event) => {//apos a leitura estiver pronta ele armazena ela em evento e armazena em url
        const url = event.target.result;
        props.EnviodaImagem(url); 
        
      };

     
      
    }
  };
  return (
    <div className="campo">
      <label>{props.label}</label>
      <input
        type="file"
        accept="image/*"
        onChange={CriarUrl}
        required={props.obrigatorio}
       
      />
    </div>
  );
};

export default FileImg;
