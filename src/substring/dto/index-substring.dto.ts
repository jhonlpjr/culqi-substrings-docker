import { IsArray, IsString } from "@nestjs/class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class IndexSubstringDto {
    @ApiProperty({default: "foobar"})
    @IsString()
    s: String;

    @ApiProperty({default: ["foo","bar","man"]})
    @IsArray()
    @IsString({each: true})
    words: String[];
}
