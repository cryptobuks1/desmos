package main

import (
	"fmt"
	"syscall/js"

	"github.com/cosmos/cosmos-sdk/client/context"
	sdk "github.com/cosmos/cosmos-sdk/types"
	app "github.com/kwunyeung/desmos"
	"github.com/kwunyeung/desmos/x/magpie/types"
)

var c chan bool

func init() {
	c = make(chan bool)
}

func queryMagpie(this js.Value, inputs []js.Value) interface{} {

	cdc := app.MakeCodec()

	callback := inputs[len(inputs)-1:][0]

	cliCtx := context.NewCLIContext().WithCodec(cdc)

	postID := inputs[0].String()

	res, _, err := cliCtx.QueryWithData(fmt.Sprintf("custom/magpie/post/%s", postID), nil)
	if err != nil {
		fmt.Printf("could not find post - %s \n", postID)
		return nil
	}

	var out types.QueryResPost

	cdc.MustUnmarshalJSON(res, &out)

	callback.Invoke(js.Null(), cliCtx.PrintOutput(out))

	return nil
}

func main() {

	// Read in the configuration file for the sdk
	config := sdk.GetConfig()
	app.SetBech32AddressPrefixes(config)
	config.Seal()

	js.Global().Set("queryMagpie", js.FuncOf(queryMagpie))
	<-c
	println("We are out of here")
}
