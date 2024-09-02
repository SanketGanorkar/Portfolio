import cld from "@/cloudConfig/cloudinaryConfig.js";
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';

    const armouriq = cld
    .image('armoriq_pqgmkb')
    .format('auto')
    .quality('auto')
    .resize(auto().gravity(autoGravity()));

    const cec = cld
    .image('Cec_yyywp1')
    .format('auto')
    .quality('auto')
    .resize(auto().gravity(autoGravity()).width(500).height(500));

    const itsf = cld
    .image('Itsf_p4vgtk')
    .format('auto')
    .quality('auto')
    .resize(auto().gravity(autoGravity()).width(500).height(500));

    export const devstory = [
        {
            id: 1,
            img: armouriq,
        },
        {
            id: 2,
            img: cec,
        },
        {
            id: 3,
            img: itsf,
        }
    ];