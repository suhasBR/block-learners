import json

for i in range(0,100):
    token = {
        "name":"Miner"+str(i),
        "description":"Miner profile NFT",
        "imageURL":"https://ipfs.io/ipfs/QmfHEnSvBQ3Pe6N1kiSnM9KYGAc5VJPXKVw9pRm2vnnQMc",
        "thumbnail":"https://gateway.lighthouse.storage/ipfs/QmfHEnSvBQ3Pe6N1kiSnM9KYGAc5VJPXKVw9pRm2vnnQMc"
    }

    json_object = json.dumps(token)
    fname = str(i)
    with open("/home/suhas/blockRacers/nfts/metadata/"+fname+".json","w") as outfile:
        outfile.write(json_object)