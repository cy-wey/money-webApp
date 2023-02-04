import styled from "styled-components";

const ModalMask = styled.div`
  @media (min-width: 800px) {
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .7);
    > div {
      position: absolute;
      font-size: 26px;
      left: 50%;
      top: 20%;
      transform: translateX(-50%);
      background: #fff;
      height: 380px;
      padding: 20px;

      > div {
        position: absolute;
        background: url("https://s3.bmp.ovh/imgs/2023/02/03/2e94ace71cb09a9f.png") center no-repeat;
        background-size: 300px;
        width: 100%;
        height: 100%;
        left: 0;
        top: 5%;
      }
    }
  }
`

const DataMatrix = () => {
  return (
    <div>
      <ModalMask>
        <div>该应用为手机应用，请扫码查看
          <div/>
        </div>
      </ModalMask>
    </div>
  )
}

export {DataMatrix}