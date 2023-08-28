package com.asana.codegen;

import java.util.Map;

import org.json.*;
import io.swagger.codegen.v3.*;
import io.swagger.codegen.v3.generators.javascript.*;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.Operation;
import io.swagger.v3.oas.models.media.Schema;

public class JavascriptClientCodegenGenerator extends JavaScriptClientCodegen {
  public JavascriptClientCodegenGenerator() {
    super();
    apiDocTemplateFiles.put("code_samples.mustache", ".yaml");
  }

  @Override
  public void processOpts() {
    // custom generators do not set the CodegenConstants
    // Super must be called BEFORE our modification, otherwise the package name
    // somehow ends up wrong
    super.processOpts();
    setProjectName("asana");
  }

  @Override
  public String getModelPropertyNaming() {
    // Javascript tries to use camelCase by default:
    // https://github.com/swagger-api/swagger-codegen-generators/blob/66dcca9d545892e18f982b2cde60621ec6f72bfe/src/main/java/io/swagger/codegen/v3/generators/javascript/JavaScriptClientCodegen.java#L112
    //
    // but we want it to use the OAS schema
    return CodegenConstants.MODEL_PROPERTY_NAMING_TYPE.original.toString();
  }

  @Override
  public void setParameterExampleValue(CodegenParameter p) {
    // Our example correction code must execute before super, to ensure that
    // super does its special magic of determining the example type:
    // https://github.com/swagger-api/swagger-codegen-generators/blob/master/src/main/java/io/swagger/codegen/v3/generators/javascript/JavaScriptClientCodegen.java#L714
    ExampleUtility.tryToSetExample(p);

    // "CSV" is used to declare that a query param string is joined by commas.
    // If that's the case, we can use the raw JSON representation as a valid
    // python list as the syntax is the same
    if ("csv".equalsIgnoreCase(p.collectionFormat)) {
      return;
    }

    super.setParameterExampleValue(p);

    // Wrap file request body param example in fs.createReadStream
    if (p.paramName.equalsIgnoreCase("file")) {
      p.example = "fs.createReadStream(" + p.example + ")";
    }

    String type = p.baseType;
    if (type == null) {
        type = p.dataType;
    }

    // Update example for requests that require body
    if (!languageSpecificPrimitives.contains(type)) {
      // type is a model class, e.g. User
      p.example = "new " + moduleName + "." + type + ".constructFromObject({data: {param1: \"value1\", param2: \"value2\",}})";
    }
  }

  @Override
  public CodegenOperation fromOperation(String path, String httpMethod, Operation operation, Map<String, Schema> schemas, OpenAPI openAPI) {
    CodegenOperation op = super.fromOperation(path, httpMethod, operation, schemas, openAPI);
    // Set vendor-extension to be used in template:
    //     x-codegen-isCreateAttachmentForObject
    if(op.operationId.equalsIgnoreCase("createAttachmentForObject")) {
      op.vendorExtensions.put("x-codegen-isCreateAttachmentForObject", true);
    }
    if(op.operationId.equalsIgnoreCase("searchTasksForWorkspace")) {
      op.vendorExtensions.put("x-codegen-isSearchTasksForWorkspace", true);
    }
    return op;
  }
}
