import { useAddress, useContract, Web3Button,ConnectWallet } from "@thirdweb-dev/react";
import { SignedPayload721WithQuantitySignature } from "@thirdweb-dev/sdk";
import type { NextPage } from "next";
import React, { useState, useEffect } from "react";
import { ethers } from "ethers"
import Image from 'next/image'
import Seo from './components/Seo'
import Header from './components/Header';
import toast, { Toaster } from 'react-hot-toast'

const signatureDropAddress = "0x5C57A4e9A549E6bD4B2393e9BEa9f2CDbB6A0a4d";

const Home: NextPage = () => {
  const address = useAddress();

  const [mintNum, setMintNum] = useState(0);
  const [mintQuantity, setmintQuantity] = useState(1);
  const [disabledFlag, setDisabledFlag] = useState(false);
  const abi = [
    "function totalMinted() external view returns (uint256)",
  ]
  const contractAddress = "0x5C57A4e9A549E6bD4B2393e9BEa9f2CDbB6A0a4d"
  useEffect(() => {
    addChain();
    if (address) {
      setConnect();
      
    } 
    async function addChain() {
      try{
        await (window as any).ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{
            chainId: "0x5",
            //chainName: 'Goerli',
            //nativeCurrency: {
            //    name: 'GoerliETH',
            //    symbol: 'GoerliETH',
            //    decimals: 5,
            //},
            //rpcUrls: ['https://goerli.infura.io/v3/20cd5bade2c0407da65c6811cc2a1b37'],
          }],
        })
        console.log("try");
      }catch(Exeption){
        console.log("Ethereum already Connected");
        console.log("catch");
      }finally{
        console.log("finally");
      }
    }
  }
);

  async function setConnect() {
    const provider = new ethers.providers.Web3Provider((window as any).ethereum)  
    const signer = provider.getSigner()
    const contract = new ethers.Contract(contractAddress, abi, signer);
    const mintNumber = (await contract.totalMinted()).toString();
    setMintNum(mintNumber);


  }
  const { contract: signatureDrop } = useContract(
    signatureDropAddress,
    "signature-drop"
  );

  async function claim() {
    try {
      const tx = await signatureDrop?.claim(mintQuantity);
      alert(`Succesfully minted NFT!`);
    } catch (error: any) {
      alert(error?.message);
    }
  }
  async function connectMetamusk() {

    if (!address) {
      return;
    }

    //if (isMismatch) {
      //switchNetwork && switchNetwork(ChainId.Goerli)
    //  return;
   // }
    setConnect();
    setDisabledFlag(true);
  }



  async function claimWithSignature() {
    const signedPayloadReq = await fetch(`/api/generate-mint-signature`, {
      method: "POST",
      body: JSON.stringify({
        address: address,
      }),
    });

    console.log(signedPayloadReq);

    if (signedPayloadReq.status === 400) {
      alert(
        "Looks like you don't own an early access NFT :( You don't qualify for the free mint."
      );
      return;
    } else {
      try {
        const signedPayload =
          (await signedPayloadReq.json()) as SignedPayload721WithQuantitySignature;

        console.log(signedPayload);

        const nft = await signatureDrop?.signature.mint(signedPayload);

        alert(`Succesfully minted NFT!`);
      } catch (error: any) {
        alert(error?.message);
      }
    }
  }
  // ミントボタン用
  function MintButton() {

    const mintQuantityPlus = async () =>{
      if(mintQuantity == 3){
        return;
      } else {
        setmintQuantity(mintQuantity + 1);
      }
    };

    const mintQuantityMinus = async () =>{
      if(mintQuantity == 1){
        return;
      } else {
        setmintQuantity(mintQuantity - 1);
      }
    };
    
    return <>
    <div className="bg-[url('/bg.png')] pb-16 flex flex-wrap buttom justify-center bg-black bg-center bg-cover">
      <div className='px-2 py-16 lg:px-28 lg:py-28'>
        <Image className="min-w-full" src="/main_grap.png" alt="Main Image" width={500} height={500}/>
      </div>
      <div className="m-28 px-2 py-20 lg:px-20 lg:py-4 border-double border-8 rounded-md bg-black text-center bg-center bg-contain bg-no-repeat">
        <h3 className="text-xs lg:text-4xl text-white font-semibold "></h3>
        <a className="text-sm lg:text-4xl pt-1 font-['Impact'] text-[#FFE200] ">WHITELIST</a><a className="text-sm lg:text-4xl pt-1 font-['Impact'] text-[#ec4899] ">PRESALE</a>
        <h1 className="text-sm lg:text-3xl pt-1 pb-3 text-white font-['Impact']">5000NFTs</h1>
        {/* (!disabledFlag) && <button type="button" className="lg:text-2xl py-3 px-16 inline-flex justify-center items-center gap-2 rounded-full border border-transparent 
        bg-[#FFE200] border-[#ec4899] font-['Impact'] text-[#ec4899] hover:yellow-500 hover:bg-[#ec4899] hover:text-[#FFE200] hover:border-[#ec4899] 
        focus:outline-none focus:ring-2 focus:ring-yellow-200 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800" disabled={disabledFlag} onClick={() => addChain()}>
        CONNECT WALLET</button>*/}
        <Toaster />
        { (disabledFlag) && <button type="button" className="lg:text-2xl py-3 px-16 inline-flex justify-center items-center gap-2 rounded-full border border-transparent 
        bg-gray-500 border-gray-500 font-['Impact'] text-gray-800 " disabled={disabledFlag} >
        CONNECT WALLET</button>}
        <Toaster />
        <h1 className="text-base lg:text-3xl pt-8 pb-6 text-white font-['Impact']"> {mintNum} / 5000</h1>
        <a className="text-base lg:text-3xl pt-8 pb-8 text-white font-['Impact']">3</a><a className="text-base lg:text-3xl pt-8 pb-8 text-[#FFE200] font-['Impact'] ">MAX</a><br/>
        
        <div className="pt-6 pb-7">
          <button type="button" className="lg:text-3xl inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem]
          border-[#ec4899] border-transparent font-['Impact'] bg-[#FFE200] text-[#ec4899] hover:text-[#FFE200] hover:bg-[#ec4899] focus:outline-none focus:ring-2
          focus:ring-[#FFE200] focus:ring-offset-2 transition-all text-sm  dark:focus:ring-offset-gray-800" onClick={mintQuantityMinus}>
          -</button>
          <a className="text-base lg:text-3xl px-8 pt-6 pb-6 text-white font-['Impact']">{mintQuantity}</a>
          <button type="button" className="lg:text-3xl inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem]
          border-[#ec4899] border-transparent font-['Impact'] bg-[#FFE200] text-[#ec4899] hover:text-[#FFE200] hover:bg-[#ec4899] 
          focus:outline-none focus:ring-2 focus:ring-[#FFE200] focus:ring-offset-2 transition-all text-sm  dark:focus:ring-offset-gray-800" onClick={mintQuantityPlus}>
          +</button><br/>
        </div>

        {/* (!disabledFlag) && <button type="button" className="lg:text-2xl py-3 px-24 inline-flex justify-center items-center gap-2 rounded-full border border-transparent 
        bg-gray-500 border-gray-500 font-['Impact'] text-gray-800 " onClick={() => claim()}>
        MINT NOW</button>*/}

        { (!disabledFlag) && <button type="button" className="lg:text-2xl py-3 px-24 inline-flex justify-center items-center gap-2 rounded-full border border-transparent
        bg-[#ec4899] border-yellow-200 font-['Impact'] text-[#FFE200] hover:yellow-500 hover:bg-[#FFE200] hover:text-[#ec4899] hover:border-[#ec4899]
          focus:outline-none focus:ring-2 focus:ring-yellow-200 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800" onClick={() => claim()}>
        MINT NOW</button>}
        <Toaster />
        </div>
    </div>
    </>
  }

  return (
    <div>
      <Seo
          pageTitle={'SJB_Hushimiinari'}
          pageDescription={'SJB_Hushimiinari'}
          pageImg={'https://sjb-hushimiinari.vercel.app/_next/image?url=%2Fmain_grap.png&w=3840&q=75'}
          pageImgWidth={1920}
          pageImgHeight={1005}
      />
      <Header />
      <MintButton/>
    </div>
    
  );
};

export default Home;
