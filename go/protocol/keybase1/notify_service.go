// Auto-generated by avdl-compiler v1.3.25 (https://github.com/keybase/node-avdl-compiler)
//   Input file: avdl/keybase1/notify_service.avdl

package keybase1

import (
	"github.com/keybase/go-framed-msgpack-rpc/rpc"
	context "golang.org/x/net/context"
)

type ShutdownArg struct {
	Code int `codec:"code" json:"code"`
}

type NotifyServiceInterface interface {
	Shutdown(context.Context, int) error
}

func NotifyServiceProtocol(i NotifyServiceInterface) rpc.Protocol {
	return rpc.Protocol{
		Name: "keybase.1.NotifyService",
		Methods: map[string]rpc.ServeHandlerDescription{
			"shutdown": {
				MakeArg: func() interface{} {
					var ret [1]ShutdownArg
					return &ret
				},
				Handler: func(ctx context.Context, args interface{}) (ret interface{}, err error) {
					typedArgs, ok := args.(*[1]ShutdownArg)
					if !ok {
						err = rpc.NewTypeError((*[1]ShutdownArg)(nil), args)
						return
					}
					err = i.Shutdown(ctx, typedArgs[0].Code)
					return
				},
				MethodType: rpc.MethodCall,
			},
		},
	}
}

type NotifyServiceClient struct {
	Cli rpc.GenericClient
}

func (c NotifyServiceClient) Shutdown(ctx context.Context, code int) (err error) {
	__arg := ShutdownArg{Code: code}
	err = c.Cli.Call(ctx, "keybase.1.NotifyService.shutdown", []interface{}{__arg}, nil)
	return
}
