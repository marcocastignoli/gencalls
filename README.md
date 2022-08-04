# gencalls: automatically generating EVM Calls

How many times you wrote *ethers* or *web3* calls? [Typechain](https://github.com/dethcrypto/TypeChain) is a beautiful solution, but its only inputs are local files ([eth-sdk](https://github.com/dethcrypto/eth-sdk) exists but it only supports Etherscan), also writing new targets is difficult because *typechain* doesn't use a template engine.

## Initial implementation
Rewriting typechain from scratch it takes a long time, and probably it's not needed. The best solution would be to add a template engine on typechain and integrating multiple input types other than ABIs.
The initial implementation will:
* make use of typechain to generate the basic factories
* offer an easy way to generate new code by using [hygen](https://github.com/jondot/hygen) (a comfortable code generator)
* support multiple types of inputs: ABIs, [Sourcify verified contracts](https://sourcify.dev/), addresses (and the trying to extract the metadata directly from the bytecode, for more info read [here](https://docs.soliditylang.org/en/v0.8.15/metadata.html)), Etherscan and developers can create more.

## Example
```
gencalls --from sourcify://1@0x0000... --target usedapp --output ./gen/hooks
```
1. Fetches the metadata from sourcify, example [here](https://repo.sourcify.dev/contracts/full_match/1/0x00000000219ab540356cBB839Cbe05303d7705Fa/metadata.json)
2. It generates the [useDapp](https://usedapp.io/) React hooks. The target usedapp uses a **hygen** generator that
    * first creates the typechain's bindings
    * then [uses the typechain's bindings](https://usedapp-docs.netlify.app/docs/Guides/Reading/Typechain) to create the hooks
3. saves the generated hooks in `./gen/hooks`
