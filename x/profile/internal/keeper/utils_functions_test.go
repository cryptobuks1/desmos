package keeper_test

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/desmos-labs/desmos/x/profile/internal/types"
	"github.com/stretchr/testify/require"
	"testing"
)

func TestKeeper_IterateProfile(t *testing.T) {
	creator, err := sdk.AccAddressFromBech32("cosmos1cjf97gpzwmaf30pzvaargfgr884mpp5ak8f7ns")
	require.NoError(t, err)
	creator2, err := sdk.AccAddressFromBech32("cosmos1y54exmx84cqtasvjnskf9f63djuuj68p7hqf47")
	require.NoError(t, err)

	creator3, err := sdk.AccAddressFromBech32("cosmos1s3nh6tafl4amaxkke9kdejhp09lk93g9ev39r4")
	require.NoError(t, err)

	creator4, err := sdk.AccAddressFromBech32("cosmos15lt0mflt6j9a9auj7yl3p20xec4xvljge0zhae")
	require.NoError(t, err)

	profiles := types.Profiles{
		types.NewProfile("first", creator),
		types.NewProfile("second", creator2),
		types.NewProfile("not", creator3),
		types.NewProfile("third", creator4),
	}

	expProfiles := types.Profiles{
		profiles[1],
		profiles[3],
		profiles[0],
	}

	ctx, k := SetupTestInput()

	for _, profile := range profiles {
		err := k.SaveProfile(ctx, profile)
		require.NoError(t, err)
	}

	var validProfiles types.Profiles
	k.IterateProfile(ctx, func(_ int64, profile types.Profile) (stop bool) {
		if profile.Moniker == "not" {
			return false
		}
		validProfiles = append(validProfiles, profile)
		return false
	})

	require.Equal(t, expProfiles, validProfiles)

}
